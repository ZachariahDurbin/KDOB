const graphql = require('graphql');
const { buildResolveInfo } = require('graphql/execution/execute');
const bcrypt = require('bcryptjs');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;
const User = require('../mongo/user');

// Creates a new object type, usertype
const UserType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    })
});
//creates a querry to return field values
const UserQueries = {
    user:{
        type: UserType,
        args: { name: { type: GraphQLString } },
        resolve(parent, args){
            return User.findOne({ name: args.name});
        }
    }
}
//function to create a variable
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
//lets our system know that these functions are querries and schemas
module.exports = {
    query: UserQueries,
    mutation: UserMutations
}