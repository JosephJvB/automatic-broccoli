import { Solver } from "./solver";
import board from './data.json';

const solver = new Solver(board);
console.log('init')
console.log(solver.board)
const allSpacesFilled = solver.fillNextEmpty();
if(allSpacesFilled && solver.isValidSolution) {
  console.log('solved in', solver.turns)
  console.log(solver.board)
} else {
  console.log('unsolved in', solver.turns)
  console.log(solver.board)
}