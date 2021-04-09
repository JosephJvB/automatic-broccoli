import { CellCoords } from "./interface";

export class Solver {
  board: number[][];
  turns: number = 0;
  constructor(board: number[][]) {
    this.board = board;
  }

  solve(): boolean {
    this.turns++;
    const next = this.nextEmpty;
    if(!next) {
      return true;
    }
    const {r, c} = next;
    for(let i = 1; i < 10; i++) {
      const valid = this.isValid(next, i);
      if(!valid) continue; // if number not valid in nextEmpty, try number++
      this.board[r][c] = i;
      if(this.solve()) {
        return true;
      };
    }
    // tried all numbers in a cell and none were valid, backtrack
    this.board[r][c] = 0;
    return false;
  }

  isValid({r, c}: CellCoords, val: number): boolean {
    // check row
    if(this.board[r].includes(val)) {
      return false;
    }
    // check column
    for(const row of this.board) {
      if(row[c] == val) {
        return false;
      }
    }
    // check matrix
    const mt = Math.floor(r / 3) * 3; // matrix top
    const ml = Math.floor(c / 3) * 3; // matrix left
    for(let mr = mt; mr < mt + 3; mr++)
    for(let mc = ml; mc < ml + 3; mc++) {
      if(this.board[mr][mc] == val) {
        return false;
      }
    }
    return true;
  }

  get nextEmpty(): CellCoords | null {
    for(let r = 0; r < 9; r++)
    for(let c = 0; c < 9; c++) {
      const n = this.board[r][c];
      if(n == 0) return {r, c};
    }
    return null;
  }
}