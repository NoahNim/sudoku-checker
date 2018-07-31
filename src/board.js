export class sudoku {
  constructor(board){
    this.board = [[],[],[],[],[],[],[],[],[]];
  }
}
// this.board[i] = Math.floor(Math.random * 10) - 1;
export function sudokuCheckerHorizontal(board){

  console.log("Hey");
  console.log(board);
  for(var i = 0; i <= 8; i++){
    console.log(i);
    for(var j = 0; j <= 8; j++){
      for (var k = 0; k <= 8; k++) {
        if (k != j){
          if (board[i][k] == board[i][j]){
            console.log("FALLLLLLLSE!!!!!");
            return false;
          }
        }
      }
    }
  }
    console.log("truey");
    return true;
  }
export function sudokuCheckerVertical(board){
  console.log("Ho!");
  console.log(board);
    for(var i = 0; i <= 8; i++){
      console.log("string");
      for(var j = 0; j <= 8; j++){
        console.log("Joy");
        for (var k = 0; k <= 8; k++) {
          console.log("Fear");
          if (k != i){
            if (board[i][k] == board[j][k]){
              console.log("FALLLLLLLSE!!!!!");
              return false;
            }
          }
        }
      }
    }
    console.log("also truey");
    return true;
  }
