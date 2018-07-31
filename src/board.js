export class sudoku {
  constructor(board){
    this.board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
  };

sudokuChecker(board){
    for(var i = 0; i >= 9; i++){
      for(var j = 0; j >= 9; j++){
        for (var k = 0; i >= 9; i++) {
          if (k != j){
            if (board[i][k] == board[i][j]){
              return false;
            }
          }
        }
      }
    }
    return true;
  };
}
// this.board[i] = Math.floor(Math.random * 10) - 1;
