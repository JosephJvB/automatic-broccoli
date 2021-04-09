from pprint import pprint

board = [
    [ 3, 0, 9, 0, 0, 0, 4, 0, 0 ],
    [ 2, 0, 0, 7, 0, 9, 0, 0, 0 ],
    [ 0, 8, 7, 0, 0, 0, 0, 0, 0 ],
    [ 7, 5, 0, 0, 6, 0, 2, 3, 0 ],
    [ 6, 0, 0, 9, 0, 4, 0, 0, 8 ],
    [ 0, 2, 8, 0, 5, 0, 0, 4, 1 ],
    [ 0, 0, 0, 0, 0, 0, 5, 9, 0 ],
    [ 0, 0, 0, 1, 0, 6, 0, 0, 7 ],
    [ 0, 0, 6, 0, 0, 0, 1, 0, 4 ],
]

def valid(y, x, v):
    if v in board[y]:
        return False # row
    for i in range(9):
        if board[i][x] == v:
            return False # col
    mt = (y // 3) * 3
    ml = (x // 3) * 3
    for i in range(mt, mt + 3):
        for j in range(ml, ml + 3):
            if board[i][j] == v:
                return False # matrix
    return True

def go():
    for y in range(9):
        for x in range(9):
            if board[y][x] == 0:
                for v in range(1, 10):
                    if valid(y, x, v):
                        board[y][x] = v
                        go()
                        board[y][x] = 0
                return
    print('all spaces filled')
    pprint(board)
    quit()

if __name__ == '__main__':
    pprint(board)
    go()