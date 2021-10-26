const graphql = require('graphql');
const { buildResolveInfo } = require('graphql/execution/execute');
const bcrypt = require('bcryptjs');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;
const Motd = require('../mongo/motd');

// Creates a new object type, usertype
const motdType = new GraphQLObjectType({
    name: 'motd',
    fields: () => ({
        id: { type: GraphQLID },
        date: { type: GraphQLString },
        message: { type: GraphQLString },
    })
});
//creates a querry to return field values
const MotdQueries = {
    motd:{
        type: motdType,
        args: { date: { type: GraphQLString } },
        resolve(parent, args){
            return Motd.findOne({ date: args.date});

        }
    }
};
//function to create a variabl
const MotdMutations = {
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
};

//lets our system know that these functions are querries and schemas
module.exports = {
    query: MotdQueries,
    mutation: MotdMutations
}