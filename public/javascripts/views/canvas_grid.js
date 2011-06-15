var CanvasGrid = function(canvas) {
  var private = {
    width: 0,
    height: 0,
    
    clear: function() {
      canvas.clearRect(1,1, private.width, private.height);
    }
  }
  
  var public = {
    initialize: function(width, height) {
      private.width = width;
      private.height = height;
    },
    
    draw: function(grid) {
      private.clear();

      for (var i=0; i < grid.rows().length(); i+=1) {    
        for (var j=0; j < grid.columns().length(); j+=1) {
            if (grid.getCell(i,j) == true) {
              canvas.fillRect(i, j, 1, 1);
            }
        }
      }      
    }
  }
  
  return public;
}