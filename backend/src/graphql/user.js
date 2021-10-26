const graphql = require('graphql');
const { buildResolveInfo } = require('graphql/execution/execute');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const UserMongo = require('../mongo/user');
const UserLogic = require('../businesslogic/user');


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
            return UserMongo.findOne({ name: args.name});
        }
    },

    signIn:{
        type: UserType,
        args: { 
            email: { type: GraphQLString },
            password: { type: GraphQLString }
        },
        resolve(parents, args){
            
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
            console.log('made it here');
            let user = new UserMongo(UserLogic.createNewUser(args)); //Call to board logic
            return user.save();
        }
    }
}

module.exports = {
    query: UserQueries,
    mutation: UserMutations
}