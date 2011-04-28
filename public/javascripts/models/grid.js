function Grid(columns, rows) {
  var that = this;
  
  that.tiles = constructGrid();
  
  /** PUBLICS **/
  
  that.numTiles = function() {
    var count = 0;
    
    for (var i = 0; i < rows; i++) {
      count += that.tiles[i].length;
    }
    
    return count;
  },
  
  that.takeTurn = function() {
    visibleTiles = 0;
          
    forEachTile(function(tile, coords) {        
      tile.takeTurn( getVisibleNeighbours(coords) );
    });    
  }
  
  that.getTile = function(x,y) {
    return that.tiles[y-1][x-1];
  }
    
  /** PRIVATE **/
  
  function constructGrid() {    
    var tiles = [];
    
    for (var i = 0; i < rows; i++) {
      tiles[i] = [];
      
      for (var j = 0; j < columns; j++) {
        tiles[i].push( new Tile() );
      }
    }
    
    return tiles;
  }
  
  function forEachTile(yield) {
    for (var i = 0; i < rows; i++ ) {
      var row = that.tiles[i];
      
      for (var j = 0; j < columns; j++ ) {
        yield(row[j], { x: j + 1, y: i + 1 });
      }
    }
  }
  
  function getVisibleNeighbours(coords) {        
    var visibleNeighbours = 0;
    
    var rootX = coords.x;
    var rootY = coords.y;
    var maxX  = columns;
    var maxY  = rows;
    
    var minSubX = ((rootX - 1) < 1) ? 1 : rootX - 1;
    var minSubY = ((rootY - 1) < 1) ? 1 : rootY - 1;
    var maxSubX = ((rootX + 1) > maxX) ? maxX : rootX + 1;
    var maxSubY = ((rootY + 1) >= maxY) ? maxY : rootY + 1;
    
    for (var pX = minSubX; pX <= maxSubX; pX++) {
      for(var pY = minSubY; pY <= maxSubY; pY++) {        
        var tile = that.getTile( pX, pY );
        
        if (tile.visible)
          visibleNeighbours++;
      }
    }
    
    return visibleNeighbours;  
  }
}