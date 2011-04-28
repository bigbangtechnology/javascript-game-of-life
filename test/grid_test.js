$(document).ready(function() {

 module("Core");
 
 test("should have 100 tiles when constructed with 10 width and 10 height", function() {
   var width  = 10;
   var height = 10;
   
   var grid = new Grid(width, height);
   
   equal(grid.numTiles(), width * height, "should have 1 tile for each slot");
 });
 
 module("Life");
 
 test("given a three by three grid, with the first three tiles visible, the 5th tile should become visible", function() {
    var width  = 3;
    var height = 3;

    var grid = new Grid(width, height);

    grid.getTile(1,1).visible = true;
    grid.getTile(1,2).visible = true;
    grid.getTile(1,3).visible = true;
    
    grid.takeTurn();
    
    equal(grid.getTile(2,2).visible, true, "should be visible!");
  });
  
  test("given a six by five grid, with the 2,2 3,4 and 4,4 visible, 3,3 should become visible", function() {
    var width = 6;
    var height = 5;
    
    var grid = new Grid(width, height);
    
    grid.getTile(2,2).visible = true;
    grid.getTile(3,4).visible = true;
    grid.getTile(4,4).visible = true;
    
    grid.takeTurn();
    
    equal(grid.getTile(3,3).visible, true, "should be visible!");
  })
 
});
