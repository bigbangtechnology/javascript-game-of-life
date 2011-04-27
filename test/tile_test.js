$(document).ready(function() {

 module("Core");
 
 test("should have an index when being built", function() {
   var index = 1;
   
   var tile = new Tile(index);
   
   equal(tile.position, index);
 });
 
 module("Birth");
 
 test("should appear when there are exactly three living tiles surrounding it", function() {
   var neighbours = 3;
   
   var tile = new Tile();
   
   tile.takeTurn(neighbours);
   
   ok(tile.visible, "the tile should be visible");
 });
 
 module("Life");
 
 test("should appear when there are two tiles surrounding it", function() {
   var neighbours = 2;
   
   var tile = new Tile();
   
   tile.takeTurn(neighbours);

   ok(tile.visible, "the tile should be visible");
 });
 
 module("Death");
 
 test("should disappear when there are less than two living tiles surrounding it", function() {
   var neighbours = 1;
   
   var tile = new Tile();
   
   tile.takeTurn(neighbours);

   equal(tile.visible, false, "the tile should not be visible");
 });
 
 test("should disappear when there are more than three living tiles surrounding it", function() {
   var neighbours = 4;
   
   var tile = new Tile();
   
   tile.takeTurn(3);
   tile.takeTurn(neighbours);

   equal(tile.visible, false, "the tile should not be visible");
 });
 
});
