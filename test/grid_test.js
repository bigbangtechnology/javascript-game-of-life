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
  
  // set up a fun checkered test:
  for (var i=0; i < sut.rows().length(); i+=1) {    
    var evenRow = i % 2;
    
    for (var j=0; j < sut.columns().length(); j+=1) {
      if (evenRow) {
        sut.setCell(i,j, (j%2) ? true : false);
      } else {
        sut.setCell(i,j, (j%2) ? false : true);
      }
    }      
  }    
  
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

test("An empty tile with exactly three tiles surrounding it will become alive.", function() {
  var sut = new Grid(3,2);
  
  sut.setCell(0,0, true);
  sut.setCell(0,1, true);
  sut.setCell(0,2, true);
  
  // do something
  sut.iterate();
  
  equals(sut.getCell(1,1), true);
  
});

test("One or zero living squares surrounding a tile will cause it to die.", function() {
  var sut = new Grid(3,2);
  
  sut.setCell(0,0, true);
  sut.setCell(1,1, true);
  
  sut.iterate();
  
  equals(sut.getCell(1,1), false);
  
});

test("More than three living squares surrounding a tile will cause it to die.", function() {
  var sut = new Grid(3,2);
  
  sut.setCell(0,0, true);
  sut.setCell(0,1, true);
  sut.setCell(0,2, true);
  sut.setCell(1,0, true);
  sut.setCell(1,1, true);
  
  sut.iterate();
  
  equals(sut.getCell(1,1), false);
});

test("Two or three living squares surrounding a tile will cause it to survive.", function() {
  var sut = new Grid(3,2);
  
  sut.setCell(0,0, true);
  sut.setCell(0,1, true);
  sut.setCell(1,1, true);
  
  sut.iterate();
  
  equals(sut.getCell(1,1), true);
});