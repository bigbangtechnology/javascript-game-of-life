function Tile(index) {
  this.visible = false;
  
  function shouldAppear(neighbours) {
    return (neighbours == 3 || neighbours == 2) ? true : false;
  }

  return {
    position: index,
    visible: this.visible,

    takeTurn: function(neighbours) {
      this.visible = shouldAppear(neighbours) ? true : false;
    }
  }
}