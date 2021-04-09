import { Solver } from "./solver";
import board from './data.json';

const solver = new Solver(board);
console.log('init');
pp();
solver.fillEmptyRecursive();
if(!solver.nextEmpty && solver.isValidSolution) {
  console.log('solved in', solver.turns);
  pp();
} else {
  console.log('unsolved in', solver.turns);
  pp();
}

function pp() {
  console.log(solver.board.map(r => r.join(' ')));
}