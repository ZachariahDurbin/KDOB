//Creating all Constant Variables
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');
//Setting up Environment Variables...
const dotenv = require('dotenv');
dotenv.config();
const { DB_URI, DB_NAME } = process.env;


//Connecting to the MongoDB Database...
const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect();
const database = client.db(DB_NAME);


//Schemas used for Queries
var schema = buildSchema(`
  type Query {
  }

  type Mutation {
    signUp(input: SignUpInput): AuthUser!
    signIn(input: SignInInput): AuthUser!
  }
  
  input SignUpInput{
    email: String!,
    password: String!,
    name: String! 
  }

  input SignInInput{
    email: String!,
    password: String!
  }

  type AuthUser {
    user: User!
    token: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`);


// The root provides a resolver function for each API endpoint
var root = {

  //Sign Up Function
  signUp: async ({ input }) =>{
    const hashedPassword = bcrypt.hashSync(input.password); //Hash Password
    console.log("Do they match? " + bcrypt.compareSync(input.password, hashedPassword)); //Proving hash is correct
    const newUser = {
      ...input,
      password: hashedPassword
    }
    const result = await database.collection('Users').insertOne(newUser); //Inputs newUser into Database

    if(!result.acknowledged)throw new Error('Something went wrong with creation'); //If a problem occurs, throw error
    
    //If the process works, return new user to client
    return {
      user: {
        ...newUser,
        id : newUser._id
      },
      token: 'token'
    }
    
  },

  //Sign In Function
  signIn: async ({ input }) => {
    const foundUser = await database.collection('Users').findOne({ email: input.email}); //Attempts to pull credentials from database via email...
    if(!foundUser) throw new Error('Invalid credentials'); //If no user is found, throw error saying "Invalid credentials"
    const isPasswordCorrect = bcrypt.compareSync(input.password, foundUser.password); //Proving hash is correct
    if(!isPasswordCorrect) throw new Error('Invalid credentials'); //If password is wrong, throw error saying "Invalid credentials"
    return {
      user:{
        ...foundUser,
        id : foundUser._id
      },
      token: 'token'
    }
  }
};


//Async Start Function
const start = async () => {
  var app = express(); //Starting Express...

  //Using Home Directory for GraphQL Basic Testing Center...
  app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));

  //Listening to Port 4000, and Giving User Link to Connect...
  app.listen(4000);
  console.log('🚀 KDOB is at least running, right? Let\'s make sure it\'s actually working: http://localhost:4000/');
}


//Let's Go!
start();