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
    
    return this.currentField;
  }
  toggleCellState(column:number, row:number,):[]{
    this.currentField[row][column] = Number(!this.currentField[row][column])
  }

  public nextGeneration() {
    // next generation
    this.currentField = this.getNextGeneration(this.currentField);
  }

  private getNextGeneration(currentField: Cell[][]): Cell[][] {
    return currentField.map((row: Cell[], y: number) =>
      row.map((cell: Cell, x: number) => {
        const aliveNum = this.getNumberOfAliveNeighbours(x, y);
        let cellState;
        // в пустой (мёртвой) клетке, рядом с которой ровно три живые клетки, зарождается жизнь;
        //  если у живой клетки есть две или три живые соседки, то эта клетка продолжает жить; в противном случае, если соседей меньше двух или больше трёх, клетка умирает («от одиночества» или «от перенаселённости»)
        if (aliveNum === 3 && currentField[y][x] === 0) {
          cellState = 1;
        } else if ((aliveNum === 2 || aliveNum === 3) && currentField[y][x] === 1) {
          cellState = 1;
        } else {
          cellState = 0;
        }
        return cellState;
      })
    );
  }

   getNumberOfAliveNeighbours(x: number, y: number): number {
    let count = 0;
    for (let i = y - 1; i <= y + 1; i++) {
      for (let j = x - 1; j <= x + 1; j++) {
        if (i === y && j === x) {
          continue;
        }
        if (this.currentField[i] && this.currentField[i][j]) {
          count += 1;
        }
      }
    }
    return count;
  }

  setSize(width: number, height: number) {
    let newField = [];

    for (let i = 0; i < height; i++) {
      newField.push([]);
      for (let j = 0; j < width; j++) {
        newField[i].push(
          this.currentField[i] && this.currentField[i][j] ? this.currentField[i][j] : 0
        );
      }
    }

    this.currentField = newField;
  }
}