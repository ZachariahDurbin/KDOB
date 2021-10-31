const graphql = require('graphql');
const { buildResolveInfo } = require('graphql/execution/execute');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const UserMongo = require('../mongo/user');
const UserLogic = require('../businesslogic/user');

// Creates a new object type, usertype
const UserType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        jwtToken: { type:GraphQLString }
    })
});
//creates a querry to return field values
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
    },

    //USE THIS ONE THIS IS OUR TEST
    checkJWT:{
        type: UserType,
        args: {
            id: { type: GraphQLString },
            jwtToken: { type: GraphQLString }
        },
        resolve(parents, args){
            userToken = UserLogic.getUserFromToken(args.jwtToken)
            console.log(userToken 
                );
            console.log(args.id);
            console.log("Do they match? " + (( userToken === args.id) ? 'Yes' : 'No'));
            return 
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
            let user = new UserMongo(UserLogic.createNewUser(args)); //Call to board logic
            user.jwtToken = UserLogic.getToken(user.id);
            return user.save();
        }
    }
}
//lets our system know that these functions are querries and schemas
module.exports = {
    query: UserQueries,
    mutation: UserMutations
}