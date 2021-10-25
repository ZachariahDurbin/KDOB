const graphql = require('graphql');
const { buildResolveInfo } = require('graphql/execution/execute');
const bcrypt = require('bcryptjs');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;
const Motd = require('../mongo/motd');


const motdType = new GraphQLObjectType({
    name: 'motd',
    fields: () => ({
        id: { type: GraphQLID },
        date: { type: GraphQLString },
        message: { type: GraphQLString },
    })
});

const Query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        motd:{
            type: motdType,
            args: { date: { type: GraphQLString } },
            resolve(parent, args){
                return Motd.findOne({ date: args.date});

            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addMotd: {
            type: motdType,
            args: {
                date: { type: GraphQLString },
                message: { type: GraphQLString }
            },
            resolve(parent, args){
                let motd = new Motd({
                    date: args.date,
                    message: args.message
                });
                return motd.save();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});