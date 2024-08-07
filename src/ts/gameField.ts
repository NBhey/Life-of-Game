interface IGameField {
    getState():number[][];
    toggleCellState(x:number, y:number):[];

}


export default class GameField implements IGameField {
    height: number;
    width: number;
    constructor(height:number = 1, width:number = 0){
       this.height = height;
       this.width = width;
    }
    getState():number[][]{
        const matrix = []
        for(let i = 0; i < this.height; i+=1){
            matrix.push([])
            for(let j = 0; j < this.width; j +=1){
                matrix[i].push(0)
            }
        }
        return matrix
    }

    toggleCellState(x:number, y:number){}
    
}