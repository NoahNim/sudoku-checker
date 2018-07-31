import { sudoku } from './../src/board.js';

describe('Sudoku', function(){

  it('should test if sudoku board is built', function(){
    var testBoard = [[], [], [], [], [], [], [], [],[]];
    expect(testBoard.size).toEqual(this.board.size);
  })
});
