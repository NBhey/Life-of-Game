interface IGameField {
    getState():number[][];
    toggleCellState(row:number, column:number):[];
    nextGeneration();
    // setSize(nW:number, nH:number):[];

}


export default class GameField implements IGameField {
  height;
  width;
  currentField?:number[][];
  constructor(height:number=1, width:number=0){
     this.height = height;
     this.width = width;

     const field:number[][] = []
      for (let i = 0; i < this.height; i+=1){
      field.push([])
      for (let j = 0; j < this.width; j+=1){
        field[i].push(0)
        }
      }
      this.currentField = field;
  }
  getState():number[][]{
    
    return this.currentField ;
  }
  toggleCellState(column:number, row:number,):[]{
    this.currentField[row][column] = Number(!this.currentField[row][column])
  }

  nextGeneration() {
    for (let i = 0; i < this.currentField.length; i+=1){
      for (let j = 0; j < this.currentField[i].length; j+=1){
        let numberLiveCellsNear = this.#checkLiveCellsNear(i,j)
        if(this.currentField[i][j] == 1 && numberLiveCellsNear >= 2 && numberLiveCellsNear <= 3){
          this.currentField[i][j] == 0
        }
      }
    }
   
  }
  #checkLiveCellsNear(xi:number, yj:number):number{
    // let topRow = Boolean(this.currentField[i-1][j-1])+Boolean(this.currentField[i-1][j])+Boolean(this.currentField[i-1][j+1]);
    // let currentRow = Boolean(this.currentField[i][j-1])+Boolean(this.currentField[i][j+1]);
    // let bottomRow = Boolean(this.currentField[i+1][j-1])+Boolean(this.currentField[i+1][j])+Boolean(this.currentField[i+1][j+1]);
    // let resultLiveCell = topRow + currentRow + bottomRow;
    // return resultLiveCell;
    let count = 0;
    for (let  i = xi - 1; i < xi + 1; i +=1 ){
      for (let j = yj - 1; j < yj + 1; j +=1){
        if (this.currentField[i][j]){
        count +=1
        }
      }
    }
   return count
  }
}