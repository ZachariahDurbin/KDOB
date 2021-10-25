
const createNewBoard = (args) =>{
    return {
        players: { player1: args.player1, player2: args.player2
        },
        positions: {
            position1:  { color: "white",   amount: 2 },
            position2:  { color: null,      amount: 0 },
            position3:  { color: null,      amount: 0 },
            position4:  { color: null,      amount: 0 },
            position5:  { color: null,      amount: 0 },
            position6:  { color: "black",   amount: 5 },
            position7:  { color: "whte",    amount: 0 },
            position8:  { color: "black",   amount: 3 },
            position9:  { color: null,      amount: 0 },
            position10: { color: null,      amount: 0 },
            position11: { color: null,      amount: 0 },
            position12: { color: "white",   amount: 5 },
            position13: { color: "black",   amount: 5 },
            position14: { color: null,      amount: 0 },
            position15: { color: null,      amount: 0 },
            position16: { color: null,      amount: 0 },
            position17: { color: "white",   amount: 3 },
            position18: { color: null,      amount: 0 },
            position19: { color: "white",   amount: 5 },
            position20: { color: null,      amount: 0 },
            position21: { color: null,      amount: 0 },
            position22: { color: null,      amount: 0 },
            position23: { color: null,      amount: 0 },
            position24: { color: "black",   amount: 2 },
            whitebar: {                     amount: 0 },
            blackbar: {                     amount: 0 },
            whiteremoval: {                 amount: 0 },
            blackremoval: {                 amount: 0 }
        }
    }
}

module.exports = {
    createNewBoard
}