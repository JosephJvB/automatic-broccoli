const b = [
  [3, 0, 9,   0, 0, 0,   4, 0, 0],
  [2, 0, 0,   7, 0, 9,   0, 0, 0],
  [0, 8, 7,   0, 0, 0,   0, 0, 0],

  [7, 5, 0,   0, 6, 0,   2, 3, 0],
  [6, 0, 0,   9, 0, 4,   0, 0, 8],
  [0, 2, 8,   0, 5, 0,   0, 4, 1],

  [0, 0, 0,   0, 0, 0,   5, 9, 0],
  [0, 0, 0,   1, 0, 6,   0, 0, 7],
  [0, 0, 6,   0, 0, 0,   1, 0, 4]
]
// for(let i = 0; i < 9; i++) 
// for(let j = 0; j < 9; j++) {
//   if(b[i][j] == 0) b[i][j] = -1
// }
// console.log(b)
// return
// from any given coordinate, find the top left of the current matrix
// topLeft(2, 1)
// topLeft(4, 8)
function topLeft(r, c) {
  console.log('coords', r, c)
  console.log('value', b[r][c])
  const x = Math.floor(c / 3) * 3
  const y = Math.floor(r / 3) * 3
  console.log('topleft', x, y, 'v', b[y][x])
  let m = []
  for(let i = y; i < y + 3; i++) {
    let q = []
    for(let j = x; j < x + 3; j++) {
      q.push(b[i][j])
    }
    m.push(q)
  }
  console.log('matrix', m)
}