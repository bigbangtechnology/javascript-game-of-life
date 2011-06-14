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