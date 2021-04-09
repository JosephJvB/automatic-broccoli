import { Solver } from "./solver";
import board from './data.json';

const solver = new Solver(board);
solver.solve()