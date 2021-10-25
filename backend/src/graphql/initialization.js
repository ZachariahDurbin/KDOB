const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema} = graphql;
const board = require('./board');
const motd = require('./motd');
const user = require('./user');

//Queries exported to initialization
const query = new GraphQLObjectType({
    name: 'RootQuery',
    fields:{
        ...board.query,
        ...motd.query,
        ...user.query
    }
});

//Mutations exported to initialization
const mutation = new GraphQLObjectType({
    name: 'RootMutation',
    fields:{
        ...board.mutation,
        ...motd.mutation,
        ...user.mutation
    }
})



module.exports = new GraphQLSchema({
    query,
    mutation
});