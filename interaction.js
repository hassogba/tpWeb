
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

	// Définir ici les attributs de la 'classe'

  this.xInitPos=0;
  this.yInitPos=0;
  this.xFinalPos=0;
  this.yFinalPos=0;
  this.pression=false;

  this.boundingObject = boundingObject;
  this.interactor = interactor; 
  this.getxInitPos = function() {
    return   this.xInitPos;
  }.bind(this) ;

  this.getyInitPos = function() {
    return   this.yInitPos;

  }.bind(this) ;

  this.getxFinalPos = function() {
    return   this.xFinalPos;

  }.bind(this) ;
  this.getyFinalPos = function() {
    return   this.yFinalPos;

  }.bind(this) ;

	// Developper les 3 fonctions gérant les événements

  DnD.prototype.pression=function(evt) {
    const res = getMousePosition(canvas, evt)
    this.xFinalPos = this.xInitPos = res.x;
    this.yFinalPos = this.yInitPos = res.y;
    this.pression = true;
    interactor.onInteractionStart(this)
  }.bind(this);

  DnD.prototype.deplacer=function(evt) {
    var res = getMousePosition();
    if (this.pression){
       this.xInitPos = this.xFinalPos;
       this.yInitPos = this.yFinalPos;

       const res = getMousePosition(canvas, evt);
       this.xFinalPos = res.x;
       this.yFinalPos = res.y;

       interactor.onInteractionStart(this)
    };

  }.bind(this);

  DnD.prototype.relacher=function(evt) {

    if (this.pression){
      const res = getMousePosition(canvas, evt);
      this.xFinalPos = res.x;
      this.yFinalPos = res.y;
      this.pression = false;

      interactor.onInteractionStart(this);
    };

  }.bind(this);


	// Associer les fonctions précédentes aux évènements du canvas.

canvas.addEventListener('mousedown', this.pression, false);
canvas.addEventListener('mousemove', this.deplacer, false);
canvas.addEventListener('mouseup', this.relacher, false);

};

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



