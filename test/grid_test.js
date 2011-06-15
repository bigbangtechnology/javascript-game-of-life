// test("a basic test example", function() {
//   ok( true, "this test is fine" );
//   var value = "hello";
//   equals( "hello", value, "We expect value to be hello" );
// });

test("when I build a 20x20 grid, it should have 400 cells", function() {
  var sut = new Grid(20,20);
  
  equals(20, sut.columns().length());
  equals(20, sut.rows().length());
});

test("when I build a 3x3 grid, the cells should be activated in a checkerboard fashion", function() {
  var sut = new Grid(3,3);
  
  equals(true,  sut.getCell(0,0));
  equals(false, sut.getCell(0,1));
  equals(true,  sut.getCell(0,2));
  equals(false, sut.getCell(1,0));
  equals(true,  sut.getCell(1,1));
  equals(false, sut.getCell(1,2));
  equals(true,  sut.getCell(2,0));
  equals(false, sut.getCell(2,1));
  equals(true,  sut.getCell(2,2));
});