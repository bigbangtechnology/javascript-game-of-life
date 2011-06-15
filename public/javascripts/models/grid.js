var Grid = function(width, height) {
  var dataSource = [];
  var nextDataSource = [];

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
  
  function calculate() {
    nextDataSource = [];
    
    for (var i=0; i < height; i+=1) {    
      nextDataSource[i] = [];
      
      for (var j=0; j < width; j+=1) {
        count = countAround(i,j);
        
        // do some logic on the count and set the data
        if (count == 3) {
          nextDataSource[i][j] = true;
        }
      }      
    }  
  }
  
  // show the number of active items surrounding the row and column
  function countAround(row, column) {
    function up() { row -= 1 }
    
    function right() { column += 1 }
    
    function down() { row += 1 }
    
    function left() { column -= 1 }
        
    var count = 0;

    up();
    
    count += public.getCell(row, column);

    right();
    
    count += public.getCell(row, column);
    
    down();
    
    count += public.getCell(row, column);
    
    down();
    
    count += public.getCell(row, column);
    
    left();
    
    count += public.getCell(row, column);
        
    left();
    
    count += public.getCell(row, column);
    
    up();

    count += public.getCell(row, column);    
    
    up();
    
    count += public.getCell(row, column);
    
    return count;
  }
  
  function activate() {
    dataSource = nextDataSource;
  }
  
  dataSource = createDataSource();
  
  var public = {
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
      if (typeof dataSource[row] == "undefined") 
        return false;
      
      return (dataSource[row][column] == true) ? true : false;
    },

    setCell: function(row, column, value) {
      dataSource[row][column] = value;
    },
    
    iterate: function() {
      calculate();
      activate();
    }
  }
  
  return public;
}

// TODO: throw error when there are no rows