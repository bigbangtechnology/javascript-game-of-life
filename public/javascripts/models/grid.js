var Grid = function(width, height) {
  var dataSource = [];
  var nextDataSource = [];

  function createDataSource() {
      var data = [];

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
        
        if (count == 2) {
          nextDataSource[i][j] = dataSource[i][j];
        }
      }      
    }  
  }
  
  // show the number of active items surrounding the row and column
  function countAround(row, column) {
    var directions = {
      up:     function() { row    -= 1 },
      right:  function() { column += 1 },
      down:   function() { row    += 1 },
      left:   function() { column -= 1 }
    }
    
    var count = 0;
    var actions = ["up", "right", "down", "down", "left", "left", "up", "up"];
    
    for (var i = 0; i < actions.length; i+=1) {
      directions[actions[i]]();
      count += public.getCell(row, column);
    }
    
    return count;
  }
  
  function activate() {
    dataSource = nextDataSource;
  }
  
  dataSource = createDataSource();
  
  var public = {
    ITERATE_EVENT: "iterate",
    
    data: function() {
      return dataSource;
    },
    
    columns: function() {
      return {
        length: function() {
          return dataSource[0].length;
        }
      }
    },

    rows: function() {
      return {
        length: function() {
          return dataSource.length;
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
    },
    
    toHTML: function() {
    	var html = "<table cellpadding='0' cellspacing='0'>";

      for (var i=0; i < height; i+=1) {
        html += "<tr>";
        
        for (var j=0; j < width; j+=1) {
          var active = (this.getCell(i,j) == true) ? "active" : "";
          
          html += "<td class='" + active  + "'>&nbsp;</td>";
        }      
        
        html += "</tr>";
      }

      html += "</table>";
      
      return html;      
    }
  }
  
  return public;
}