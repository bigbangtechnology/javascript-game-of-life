var GameOfLife = function(canvas) {
  var grid;
  var canvasGrid = new CanvasGrid(canvas);  
  
  function seedGrid(width, height, finishedCallback) {
    grid = new Grid(width, height);
    canvasGrid.initialize(width, height);
    
    for (var i=0; i < grid.rows().length(); i+=1) {    
      var evenRow = i % 2;
    
      for (var j=0; j < grid.columns().length(); j+=1) {
        grid.setCell(i,j, (Math.random() > 0.5) ? true : false);
      }      
    }    

    finishedCallback();
  }

  var public = {
    initialize: function(width,height) {
      seedGrid(width, height, function() {
        setInterval(function() {
          $('#loading').hide();
          grid.iterate();
          canvasGrid.draw(grid);
        }, 200);        
      });      
    }
  }
  
  return public;
}