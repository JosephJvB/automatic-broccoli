import { CellCoords } from "./interface";

export class Solver {
  board: number[][];
  turns: number = 1;
  constructor(board: number[][]) {
    this.board = board;
    console.log('init')
    console.log(this.board)
  }

  solve(): boolean {
    let next = this.nextSpace;
    this.turns++
    if(this.turns > 300) {
      // console.log('cant solve in', this.turns, 'turns @', next)
      return false
    }
    if(!next) {
      console.log('solved in', this.turns, 'turns')
      process.exit(0)
    }
    const {r, c} = next;
    for(let i = 1; i < 10; i++) {
      if(this.isValid(next, i)) {
        this.board[r][c] = i;
        if(this.solve()) {
          return true
        }
      } else {
        this.board[r][c] = 0;
      }
    }
    console.log('couldnt solve @ ', next, 'in', this.turns, 'turns');
    console.log(this.board);
    return false;
  }

  isValid({r, c}: CellCoords, val: number): boolean {
    // check row
    if(this.board[r].includes(val)) return false;
    // check column
    for(const row of this.board) {
      if(row[c] == val) return false;
    }
    // check matrix
    const mt = Math.floor(r / 3) * 3; // matrix top
    const ml = Math.floor(c / 3) * 3; // matrix left
    for(let mr = mt; mr < mt + 3; mr++)
    for(let mc = ml; mc < ml + 3; mc++) {
      if(this.board[mr][mc] == val) return false;
    }
    return true;
  }

  get nextSpace(): CellCoords | null {
    for(let r = 0; r < 9; r++)
    for(let c = 0; c < 9; c++) {
      const n = this.board[r][c];
      if(n == 0) return {r, c};
    }
    return null;
  }
}