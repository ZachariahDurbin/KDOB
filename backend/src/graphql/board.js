const graphql = require('graphql');
const { buildResolveInfo } = require('graphql/execution/execute');
const bcrypt = require('bcryptjs');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;
const Board = require('../mongo/board');


const PlayerType = new GraphQLObjectType({
    name: 'Players',
    fields: () => ({
        player1: { type: GraphQLString },
        player2: { type: GraphQLString }
    })
});

const PlayerSpecificPositionType = new GraphQLObjectType({
    name: 'PlayerSpecificPositions',
    fields: () => ({
        amount: { type: GraphQLInt }
    })
})

const PositionType = new GraphQLObjectType({
    name: 'Positions',
    fields: () => ({
        color: { type: GraphQLString },
        amount: { type: GraphQLInt }
    })
});

const BoardType = new GraphQLObjectType({
    name: 'Board',
    fields: () => ({
        position1: {
            type: PositionType,
            resolve(parent, args){
                return parent.position1
            }
        },
        position2: {
            type: PositionType,
            resolve(parent, args){
                return parent.position2
            }
        },
        position3: {
            type: PositionType,
            resolve(parent, args){
                return parent.position3
            }
        },
        position4: {
            type: PositionType,
            resolve(parent, args){
                return parent.position4
            }
        },
        position5: {
            type: PositionType,
            resolve(parent, args){
                return parent.position5
            }
        },
        position6: {
            type: PositionType,
            resolve(parent, args){
                return parent.position6
            }
        },
        position7: {
            type: PositionType,
            resolve(parent, args){
                return parent.position7
            }
        },
        position8: {
            type: PositionType,
            resolve(parent, args){
                return parent.position8
            }
        },
        position9: {
            type: PositionType,
            resolve(parent, args){
                return parent.position9
            }
        },
        position10: {
            type: PositionType,
            resolve(parent, args){
                return parent.position10
            }
        },
        position11: {
            type: PositionType,
            resolve(parent, args){
                return parent.position11
            }
        },
        position12: {
            type: PositionType,
            resolve(parent, args){
                return parent.position12
            }
        },
        position13: {
            type: PositionType,
            resolve(parent, args){
                return parent.position13
            }
        },
        position14: {
            type: PositionType,
            resolve(parent, args){
                return parent.position14
            }
        },
        position15: {
            type: PositionType,
            resolve(parent, args){
                return parent.position15
            }
        },
        position16: {
            type: PositionType,
            resolve(parent, args){
                return parent.position16
            }
        },
        position17: {
            type: PositionType,
            resolve(parent, args){
                return parent.position17
            }
        },
        position18: {
            type: PositionType,
            resolve(parent, args){
                return parent.position18
            }
        },
        position19: {
            type: PositionType,
            resolve(parent, args){
                return parent.position19
            }
        },
        position20: {
            type: PositionType,
            resolve(parent, args){
                return parent.position20
            }
        },
        position21: {
            type: PositionType,
            resolve(parent, args){
                return parent.position21
            }
        },
        position22: {
            type: PositionType,
            resolve(parent, args){
                return parent.position22
            }
        },
        position23: {
            type: PositionType,
            resolve(parent, args){
                return parent.position23
            }
        },
        position24: {
            type: PositionType,
            resolve(parent, args){
                return parent.position24
            }
        },
        whitebar: {
            type: PlayerSpecificPositionType,
            resolve(parent, args){
                return parent.whitebar
            }
        }, 
        blackbar: {
            type: PlayerSpecificPositionType,
            resolve(parent, args){
                return parent.blackbar
            }
        }, 
        whiteremoval: {
            type: PlayerSpecificPositionType,
            resolve(parent, args){
                return parent.whiteremoval
            }
        },
        blackremoval: {
            type: PlayerSpecificPositionType,
            resolve(parent, args){
                return parent.blackremoval
            }
        },
    })
});

const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => ({
        id: { type: GraphQLID },
        players: { 
            type: PlayerType,
            resolve(parent, args){
                console.log(parent)
                return parent.players;
            }
        },
        board: {
            type: BoardType,
            resolve(parent, args){
                return parent.positions
            }
        }
    })
});

const Query = new GraphQLObjectType({
    name: 'GameQueries',
    fields: {
        getBoard:{
            type: GameType,
            args: { 
                id: { type: GraphQLID } 
            },
            resolve(parent, args){
                console.log(args.id);
                console.log(Board.findById(args.id));
                return Board.findById(args.id);
            }
        },
        getAll:{
            type: GameType,
            resolve(parent, args){
                return Board.find({})
            }
        }
    } 
});

const Mutation = new GraphQLObjectType({
    name: 'GameMutations',
    fields: {
        newBoard: {
            type: GameType,
            args: {
                player1: {type: GraphQLString},
                player2: { type: GraphQLString }
            },
            resolve(parent, args){
                let board = new Board({
                    players: { 
                        player1: args.player1,
                        player2: args.player2
                    },
                    positions: {
                        position1: {
                            color: "white",
                            amount: 2
                        },
                        position2: {
                            color: null,
                            amount: 0
                        },
                        position3: {
                            color: null,
                            amount: 0
                        },
                        position4: {
                            color: null,
                            amount: 0
                        },
                        position5: {
                            color: null,
                            amount: 0
                        },
                        position6: {
                            color: "black",
                            amount: 5
                        },
                        position7: {
                            color: "whte",
                            amount: 0
                        },
                        position8: {
                            color: "black",
                            amount: 3
                        },
                        position9: {
                            color: null,
                            amount: 0
                        },
                        position10: {
                            color: null,
                            amount: 0
                        },
                        position11: {
                            color: null,
                            amount: 0
                        },
                        position12: {
                            color: "white",
                            amount: 5
                        },
                        position13: {
                            color: "black",
                            amount: 5
                        },
                        position14: {
                            color: null,
                            amount: 0
                        },
                        position15: {
                            color: null,
                            amount: 0
                        },
                        position16: {
                            color: null,
                            amount: 0
                        },
                        position17: {
                            color: "white",
                            amount: 3
                        },
                        position18: {
                            color: null,
                            amount: 0
                        },
                        position19: {
                            color: "white",
                            amount: 5
                        },
                        position20: {
                            color: null,
                            amount: 0
                        },
                        position21: {
                            color: null,
                            amount: 0
                        },
                        position22: {
                            color: null,
                            amount: 0
                        },
                        position23: {
                            color: null,
                            amount: 0
                        },
                        position24: {
                            color: "black",
                            amount: 2
                        },
                        whitebar: {
                            amount: 0
                        },
                        blackbar: {
                            amount: 0
                        },
                        whiteremoval: {
                            amount: 0
                        },
                        blackremoval: {
                            amount: 0
                        }
                    }
                })
                //console.log(board)
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
                let board = Board.findById(args.id);
                console.log(args);
                //let board = new Board({
                //    players: { 
                //        player1: args.player1,
                //        player2: args.player2
                //    },
                return Board.findById(args.id);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});