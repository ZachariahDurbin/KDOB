const graphql = require('graphql');
const { buildResolveInfo } = require('graphql/execution/execute');
const bcrypt = require('bcryptjs');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;
const User = require('../mongo/user');


const UserType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    })
});

const UserQueries = {
    user:{
        type: UserType,
        args: { name: { type: GraphQLString } },
        resolve(parent, args){
            return User.findOne({ name: args.name});
        }
    }
}

const UserMutations = {
    addUser: {
        type: UserType,
        args: {
            name: { type: GraphQLString },
            email: { type: GraphQLString },
            password: { type: GraphQLString }
        },
        resolve(parent, args){
            let user = new User({
                name: args.name,
                email: args.email,
                password: args.password
            });
            return user.save();
        }
    }
}

module.exports = {
    query: UserQueries,
    mutation: UserMutations
}