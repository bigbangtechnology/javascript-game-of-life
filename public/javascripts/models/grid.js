var Grid = function(width, height) {
  function createDataSource() {
    var data = [];
    
    //create rows 
    for (var i=0; i < height; i+=1) {    
      data[i] = [];
      
      for (var j=0; j < width; j+=1) {
        data[i][j] = false;
      }      
    }    
    return data;
  }

  var dataSource = createDataSource();
  
  return {
    data: function(){
      return dataSource;
    },
    
    columns: function() {
      // get the length of the first row
      // create a column array for each item in a row
      // for each row, place each item into the relevant column array
    },
    
    rows: function() {
      
    }
  }
}


var grid = new Grid(3,3);
grid.columns().length == 3

///////


// TODO: throw error when there are no rows

[
  [true,    true,   true],
  [false,   false,  false],
  [true,    true,   true]
]