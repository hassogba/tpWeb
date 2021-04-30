
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

	// Définir ici les attributs de la 'classe'

  this.xInitPos=0;
  this.yInitPos=0;
  this.xFinalPos=0;
  this.yFinalPos=0;
  this.pression=false;

	// Developper les 3 fonctions gérant les événements

  DnD.prototype.pression=function(evt) {
    return {pression=true} ;

  };

  DnD.prototype.deplacer=function(evt) {
    var res = getMousePosition();
    if (pression = true){
      return {
        xFinalPos = res.x,
        yFinalPos = res.y
      }
    };

  };

  DnD.prototype.relacher=function(evt) {
    if (pression = true){
      return pression = false;
    }
    console.log(pression);
    console.log(xFinalPos);
    console.log(yFinalPos);

  };


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



