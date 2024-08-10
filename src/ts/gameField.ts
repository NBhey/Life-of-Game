interface IGameField {
    getState():number[][];
    toggleCellState(x:number, y:number):[];
    nextGeneration();
    setSize(nW:number, nH:number):[];

}


export default class GameField implements IGameField {
    height: number;
    width: number;
    currentState?:number[][];
    constructor(height:number = 1, width:number = 0){
       this.height = height;
       this.width = width;

       const matrix = []
       for(let i = 0; i < this.height; i+=1){
           matrix.push([])
           for(let j = 0; j < this.width; j +=1){
               matrix[i].push(0)
           }
       }
       this.currentState = matrix
    }
    getState():number[][]{
        return this.currentState
    }

    toggleCellState(x:number, y:number){
        this.currentState[y][x] = Number(!this.currentState[y][x])
    }
    
    nextGeneration(){
    }
    setSize(nW:number, nH:number):[]{
        let newField = [];

        for (let i = 0; i < nH; i++) {
          newField.push([]);
          for (let j = 0; j < nW; j++) {
            newField[i].push(
              this.currentState[i] && this.currentState[i][j] ? this.currentState[i][j] : 0
            );
          }
        }
    
        this.currentState = newField;
      }
    
}