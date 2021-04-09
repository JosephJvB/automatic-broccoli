https://github.com/kying18/sudoku/blob/main/sudoku.py
Getting a Mental model for this is hard

I think I've got it,
But I don't like it. It's hard to reason about. Which is exactly what people say.
Because there's levels on levels on levels of closures here. (9^9 @ worst case? Not sure)
It would be way nicer to have some sort of linked listy thing where each solution can go back to the previous solution if a dead end is reached. Then you can more clearly find where your dead end was.

[
  [3, 0, 9, 0, 0, 0, 4, 0, 0],
  [2, 0, 0, 7, 0, 9, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 0, 0],
  [7, 5, 0, 0, 6, 0, 2, 3, 0],
  [6, 0, 0, 9, 0, 4, 0, 0, 8],
  [0, 2, 8, 0, 5, 0, 0, 4, 1],
  [0, 0, 0, 0, 0, 0, 5, 9, 0],
  [0, 0, 0, 1, 0, 6, 0, 0, 7],
  [0, 0, 6, 0, 0, 0, 1, 0, 4]
]
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]
[
  [3, 9, 0,   0, 5, 0,   0, 0, 0],
  [0, 0, 0,   2, 0, 0,   0, 0, 5],
  [0, 0, 0,   7, 1, 9,   0, 8, 0],

  [0, 5, 0,   0, 6, 8,   0, 0, 0],
  [2, 0, 6,   0, 0, 3,   0, 0, 0],
  [0, 0, 0,   0, 0, 0,   0, 0, 4],

  [5, 0, 0,   0, 0, 0,   0, 0, 0],
  [6, 7, 0,   1, 0, 5,   0, 4, 0],
  [1, 0, 9,   0, 0, 0,   2, 0, 0]
]
[
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, 9, 9]
]