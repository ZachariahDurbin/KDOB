
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
        ],
        dice: {one: 0, two: 0}
    }
}

const updateBoard = (board, args) =>{
    if(!rules(board, args)) return "There has been an illegal move";
    board.board[args.oldPosition-1].amount = board.board[args.oldPosition-1].amount - 1;
    board.board[args.newPosition-1].amount = board.board[args.newPosition-1].amount + 1;
    return board;
}


const rules = (board, args) =>{
    let distance = args.newPosition - args.oldPosition;
    if(board.dice.one == distance){
        console.log("used dice one");
    } else if(board.dice.two == distance){
        console.log("used dice two");
    } else if((board.dice.one + board.dice.two) == distance){
        console.log("both dice used");
    } else{
        console.log("distance isn't achievable");
        return false;
    }
    

    return true;
}

module.exports = {
    createNewBoard, updateBoard
}