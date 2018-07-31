import { sudoku } from './../src/board.js';

describe('Sudoku', function(){

  it('should test if sudoku board is built', function(){
    var testBoard = [[], [], [], [], [], [], [], [], []];
    var actualBoard = new sudoku();
    expect(testBoard.length).toEqual(actualBoard.board.length);
  });

  it('should test if board does not repeat horizontally', function(){
    var myBoard = new sudoku([
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9],
      [1,2,3,4,5,6,7,8,9]
    ]);
    expect(myBoard.sudokuChecker()).toEqual(true);
  });
});
