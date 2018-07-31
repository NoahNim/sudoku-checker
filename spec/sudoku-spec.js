import { sudoku } from './../src/board.js';
import { sudokuCheckerHorizontal } from './../src/board.js';
import { sudokuCheckerVertical } from './../src/board.js';

describe('Sudoku', function(){

  it('should test if sudoku board is built', function(){
    var testBoard = [[], [], [], [], [], [], [], [], []];
    var actualBoard = new sudoku([[], [], [], [], [], [], [], [], []]);
    expect(testBoard.length).toEqual(actualBoard.board.length);
  });

  it('should test if board repeats horizontally', function(){
    var myBoard = new sudoku([
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]);
    console.log(myBoard);
    expect(sudokuCheckerHorizontal(myBoard)).toEqual(false);
  });
  it('should test if board does not repeat horizontally', function(){
    // for (var i = 0; i < 4; i++) {
    //   console.log("I have looped " + i);
    // }
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
    expect(sudokuCheckerHorizontal(myBoard)).toEqual(true);
  });
  it('should test if board repeats vertically', function(){
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
    console.log(myBoard)
    expect(sudokuCheckerVertical(myBoard)).toEqual(false);
  });
  it('should test if board does not repeat vertically', function(){
    var myBoard = new sudoku([
      [1,2,3,4,5,6,7,8,9],
      [2,3,4,5,6,7,8,9,1],
      [3,4,5,6,7,8,9,1,2],
      [4,5,6,7,8,9,1,2,3],
      [5,6,7,8,9,1,2,3,4],
      [6,7,8,9,1,2,3,4,5],
      [7,8,9,1,2,3,4,5,6],
      [8,9,1,2,3,4,5,6,7],
      [9,1,2,3,4,5,6,7,8]
    ]);
    console.log(myBoard)
    expect(sudokuCheckerVertical(myBoard)).toEqual(true);
  });
});
