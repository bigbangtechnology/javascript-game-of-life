var Grid = function(width, height) {
  function createDataSource() {
    var data = [];
    
    //create rows 
    for (var i=0; i < height; i+=1) {    
      data[i] = [];
      
      evenRow = i % 2;
      
      for (var j=0; j < width; j+=1) {
        if (evenRow) {
          data[i][j] = (j%2) ? true : false;          
        } else {
          data[i][j] = (j%2) ? false : true;          
        }
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
      return {
        length: function() {
          return dataSource.length;
        }
      }
    },
    
    rows: function() {
      return {
        length: function() {
          return dataSource[0].length;
        }
      }
    },
    
    getCell: function(row, column) {
      return dataSource[row][column];
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