
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
MyForm.prototype.clear = function(ctx) {
    canvas.getContext('2d').fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };
  
  
  Rectangle.prototype.paint = function(ctx) {
    ctx.lineWidth = this.getEpaisseur();
    ctx.strokeStyle=this.getCouleur();
    ctx.rect(this.getxInitPos(),this.getyInitPos(),this.getxFinalPos(),this.getyFinalPos());
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
  ctx.lineWidth = this.getEpaisseur();
  ctx.strokeStyle=this.getCouleur();
  ctx.beginPath();
    ctx.moveTo(this.getxInitPos(),this.getyInitPos());
    ctx.lineTo(this.getxFinalPos(),this.getyFinalPos());
    ctx.stroke();
  };
  
  
  Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
      this.getForms().forEach(function(eltDuTableau) {
        eltDuTableau.paint(ctx); });
  };

  updateShapeList = function(ctx) {
    
    var element = myForm.getElementById('shapeList')

  };