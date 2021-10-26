
const createNewBoard = (args) =>{
    return {
        players: { player1: args.player1, player2: args.player2
        },
        turn: "white",
        board: [
            { color: "white",           amount: 2 },
            { color: null,              amount: 0 },
            { color: null,              amount: 0 },
            { color: null,              amount: 0 },
            { color: null,              amount: 0 },
            { color: "black",           amount: 5 },
            { color: null,              amount: 0 },
            { color: "black",           amount: 3 },
            { color: null,              amount: 0 },
            { color: null,              amount: 0 },
            { color: null,              amount: 0 },
            { color: "white",           amount: 5 },
            { color: "black",           amount: 5 },
            { color: null,              amount: 0 },
            { color: null,              amount: 0 },
            { color: null,              amount: 0 },
            { color: "white",           amount: 3 },
            { color: null,              amount: 0 },
            { color: "white",           amount: 5 },
            { color: null,              amount: 0 },
            { color: null,              amount: 0 },
            { color: null,              amount: 0 },
            { color: null,              amount: 0 },
            { color: "black",           amount: 2 },
            { color: "whitebar",        amount: 0 },
            { color: "blackbar",        amount: 0 },
            { color: "whiteremoval",    amount: 0 },
            { color: "blackremoval",    amount: 0 }
        ]
    }
}

const updateBoard = (board, args) =>{
    board.board[args.oldPosition-1].amount = board.board[args.oldPosition-1].amount - 1;
    board.board[args.newPosition-1].amount = board.board[args.newPosition-1].amount + 1;
    return board;
}

module.exports = {
    createNewBoard, updateBoard
}