var CanvasGrid = function(canvas) {
  var private = {
    CELL_SIZE: 5,
    
    width: 0,
    height: 0,
    
    clear: function() {
      canvas.clearRect(0,0, private.width * private.CELL_SIZE, private.height * private.CELL_SIZE);
    }
  }
  
  var public = {
    initialize: function(width, height) {
      private.width = width;
      private.height = height;
    },
    
    draw: function(grid) {
      private.clear();
      var x, y;
      
      for (var i=0; i < grid.rows().length(); i+=1) {    
        y = i;
        
        for (var j=0; j < grid.columns().length(); j+=1) {
          x = j;
          
            if (grid.getCell(i,j) == true) {
              canvas.fillRect(x * private.CELL_SIZE, y * private.CELL_SIZE, private.CELL_SIZE, private.CELL_SIZE);
            }
        }
      }      
    }
  }
  
  return public;
}