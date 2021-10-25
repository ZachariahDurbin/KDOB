const graphql = require('graphql');
const bcrypt = require('bcryptjs');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
const MongoBoard = require('../mongo/board');
const LogicBoard = require('../businesslogic/board');

//Players for each Game
const PlayerType = new GraphQLObjectType({
    name: 'Players',
    fields: () => ({
        player1: { type: GraphQLString },
        player2: { type: GraphQLString }
    })
});

//Unique positions only a single player can access (endzones and bars)
const PlayerSpecificPositionType = new GraphQLObjectType({
    name: 'PlayerSpecificPositions',
    fields: () => ({
        amount: { type: GraphQLInt }
    })
});

//Common positions
const PositionType = new GraphQLObjectType({
    name: 'Positions',
    fields: () => ({
        color: { type: GraphQLString },
        amount: { type: GraphQLInt }
    })
});

//All board positions
const BoardType = new GraphQLObjectType({
    name: 'Board',
    fields: () => ({
        position1: {
            type: PositionType,
            resolve(parent, args){ return parent.position1 }
        },
        position2: {
            type: PositionType,
            resolve(parent, args){ return parent.position2 }
        },
        position3: {
            type: PositionType,
            resolve(parent, args){ return parent.position3 }
        },
        position4: {
            type: PositionType,
            resolve(parent, args){ return parent.position4 }
        },
        position5: {
            type: PositionType,
            resolve(parent, args){ return parent.position5 }
        },
        position6: {
            type: PositionType,
            resolve(parent, args){ return parent.position6 }
        },
        position7: {
            type: PositionType,
            resolve(parent, args){ return parent.position7 }
        },
        position8: {
            type: PositionType,
            resolve(parent, args){ return parent.position8 }
        },
        position9: {
            type: PositionType,
            resolve(parent, args){ return parent.position9 }
        },
        position10: {
            type: PositionType,
            resolve(parent, args){ return parent.position10 }
        },
        position11: {
            type: PositionType,
            resolve(parent, args){ return parent.position11 }
        },
        position12: {
            type: PositionType,
            resolve(parent, args){ return parent.position12 }
        },
        position13: {
            type: PositionType,
            resolve(parent, args){ return parent.position13 }
        },
        position14: {
            type: PositionType,
            resolve(parent, args){ return parent.position14 }
        },
        position15: {
            type: PositionType,
            resolve(parent, args){ return parent.position15 }
        },
        position16: {
            type: PositionType,
            resolve(parent, args){ return parent.position16 }
        },
        position17: {
            type: PositionType,
            resolve(parent, args){ return parent.position17 }
        },
        position18: {
            type: PositionType,
            resolve(parent, args){ return parent.position18 }
        },
        position19: {
            type: PositionType,
            resolve(parent, args){ return parent.position19 }
        },
        position20: {
            type: PositionType,
            resolve(parent, args){ return parent.position20 }
        },
        position21: {
            type: PositionType,
            resolve(parent, args){ return parent.position21 }
        },
        position22: {
            type: PositionType,
            resolve(parent, args){ return parent.position22 }
        },
        position23: {
            type: PositionType,
            resolve(parent, args){ return parent.position23 }
        },
        position24: {
            type: PositionType,
            resolve(parent, args){ return parent.position24 }
        },
        whitebar: {
            type: PlayerSpecificPositionType,
            resolve(parent, args){ return parent.whitebar }
        }, 
        blackbar: {
            type: PlayerSpecificPositionType,
            resolve(parent, args){ return parent.blackbar }
        }, 
        whiteremoval: {
            type: PlayerSpecificPositionType,
            resolve(parent, args){ return parent.whiteremoval }
        },
        blackremoval: {
            type: PlayerSpecificPositionType,
            resolve(parent, args){ return parent.blackremoval }
        },
    })
});

//Game Information
const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => ({
        id: { type: GraphQLID },
        players: { 
            type: PlayerType,
            resolve(parent, args){ return parent.players }
        },
        board: {
            type: BoardType,
            resolve(parent, args){ return parent.positions }
        }
    })
});

//Queries exported
const BoardQueries = {

    //Ask for board with id
    getBoard:{
        type: GameType,
        args: { 
            id: { type: GraphQLID } 
        },
        resolve(parent, args){
            return Board.findById(args.id);
        }
    },
    //Ask for all boards with nothing
    getAll:{
        type: GameType,
        resolve(parent, args){
            return Board.find({})
        }
    }
}

//Mutations exported
const BoardMutations = {
    //Create new blank board with player names
    newBoard: {
        type: GameType,
        args: {
            player1: {type: GraphQLString },
            player2: { type: GraphQLString }
        },
        resolve(parent, args){
            let board = new MongoBoard(LogicBoard.createNewBoard(args));
            return board.save();
        }
    },
    updateBoard: {
        type: GameType,
        args: {
            id: { type: GraphQLID },
            oldPosition: { type: GraphQLString },
            newPosition: { type: GraphQLString }
        },
        resolve(parent, args){
            let board = MongoBoard.findById(args.id);
            console.log(args);
            //let board = new Board({
            //    players: { 
            //        player1: args.player1,
            //        player2: args.player2
            //    },
            return MongoBoard.findById(args.id);
        }
    }
}


module.exports = {
    query: BoardQueries,
    mutation: BoardMutations
}