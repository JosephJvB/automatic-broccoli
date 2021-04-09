import { CellCoords } from "./interface";

export class Solver {
  board: number[][];
  turns: number = 0;
  allFilled: boolean = false;
  constructor(board: number[][]) {
    this.board = board;
  }

  fillEmptyRecursive(): void {
    this.turns++;
    const next = this.nextEmpty;
    if(!next) {
      this.allFilled = true;
      return;
    }
    const {r, c} = next;
    for(let i = 1; i < 10; i++) {
      const valid = this.isValid(next, i);
      if(!valid) continue; // if number not valid in nextEmpty, try cellvalue++
      this.board[r][c] = i;
      this.fillEmptyRecursive();
      // if recursive function returned before setting allFilled, we must reset
      if(!this.allFilled) {
        this.board[r][c] = 0;
      }
    }
    return;
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

  // check result after all empty spaces have been filled
  get isValidSolution(): boolean {
    for(let r = 0; r < 9; r++)
    for(let c = 0; c < 9; c++) {
      const cell = {r, c};
      const val = this.board[r][c];
      if(val == 0) {
        console.log('empty space still @', cell);
        return false;
      }
      this.board[r][c] = 0; // reset to pretend we are placing the value in the cell
      const valid = this.isValid(cell, val)
      this.board[r][c] = val;
      if(!valid) {
        console.log('board invalid @', cell)
        return false;
      }
    }
    return true;
  }
}