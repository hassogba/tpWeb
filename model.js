// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){

    this.forms = new Array();
    this.getForms = function() {
      return this.forms;
    }.bind(this) ;
  
    this.addForms = function(form) {
      this.forms.push(form);
    }.bind(this) ;
  
  }
  
  
  function MyForm(xInitPos,yInitPos,xFinalPos,yFinalPos,epaisseur,couleur) {
    this.xInitPos=xInitPos;
    this.yInitPos=yInitPos;
    this.xFinalPos=xFinalPos;
    this.yFinalPos=yFinalPos;
    this.epaisseur = epaisseur;
    this.couleur = couleur;
  
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
  
    this.getEpaisseur = function() {
      return   this.epaisseur;
  
    }.bind(this) ;
  
    this.getCouleur = function() {
      return   this.couleur;
    }.bind(this) ;
  
  }
  
  function Line(xInitPos,yInitPos,xFinalPos,yFinalPos,epaisseur,couleur){
    MyForm.call(this, xInitPos,yInitPos,xFinalPos,yFinalPos,epaisseur,couleur);
  };
  Line.prototype = new MyForm();
  
  function Rectangle(xInitPos,yInitPos,xFinalPos,yFinalPos,epaisseur,couleur){
      MyForm.call(this, xInitPos,yInitPos,xFinalPos,yFinalPos,epaisseur,couleur);
  };
  Rectangle.prototype = new MyForm();