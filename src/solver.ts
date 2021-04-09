import { CellCoords } from "./interface";

export class Solver {
  board: number[][];
  turns: number = 0;
  constructor(board: number[][]) {
    this.board = board;
  }

  fillNextEmpty(): boolean {
    this.turns++;
    const next = this.nextEmpty;
    if(!next) {
      return true;
    }
    const {r, c} = next;
    for(let i = 1; i < 10; i++) {
      const valid = this.isValid(next, i);
      if(!valid) continue; // if number not valid in nextEmpty, try cellvalue++
      this.board[r][c] = i;
      // start next closure
      // pass success back up the closure stack
      // once first stack returns true, all empty spaces are filled
      if(this.fillNextEmpty()) return true;
    }
    // tried all numbers in a cell and none were valid, go back to previous closure, and try cellvalue++
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
      this.board[r][c] = -1; // reset to pretend we are placing the value in the cell
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