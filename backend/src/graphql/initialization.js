const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema} = graphql;
const board = require('./board');
const motd = require('./motd');
const user = require('./user');

const query = new GraphQLObjectType({
    name: 'RootQuery',
    fields:{
        ...board.query,
        ...motd.query,
        ...user.query
    }
});

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