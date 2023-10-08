function isValidSudoku(board) {
   
    function hasDuplicates(arr) {
        const seen = new Set();
        for (let value of arr) {
            if (value !== '.' && seen.has(value)) {
                return true;
            }
            seen.add(value);
        }
        return false;
    }

    // To check rows
    for (let row of board) {
        if (hasDuplicates(row)) {
            return false;
        }
    }

    // To check columns
    for (let col = 0; col < 9; col++) {
        const columnValues = [];
        for (let row = 0; row < 9; row++) {
            columnValues.push(board[row][col]);
        }
        if (hasDuplicates(columnValues)) {
            return false;
        }
    }

    // To check 3 x 3 sub-grids
    for (let rowStart = 0; rowStart < 9; rowStart += 3) {
        for (let colStart = 0; colStart < 9; colStart += 3) {
            const subGridValues = [];
            for (let row = rowStart; row < rowStart + 3; row++) {
                for (let col = colStart; col < colStart + 3; col++) {
                    subGridValues.push(board[row][col]);
                }
            }
            if (hasDuplicates(subGridValues)) {
                return false;
            }
        }
    }

    return true;
}

// Example Sudoku board
const board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

if (isValidSudoku(board)) {
  console.log("The Sudoku board is valid.");
} else {
  console.log("The Sudoku board is not valid.");
}