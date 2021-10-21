//Creating all Constant Variables
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { MongoClient } = require('mongodb');
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
    hello: String
    kek: Float
  }

  type Mutation {
    createUser(name: String!): String
  }
`);


// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  kek: () => {
    return 3.3;
  },
  createUser: async({ name }) =>{
    const newUser = {
      ...name,
      createdAt: new Date().toISOString(),
    }
    const result = await database.collection('Users').insertOne(newUser);
    console.log("Added!");
    return "Added!";
  }
};


//Async Start Function
const start = async () => {
  

  //Starting Express...
  var app = express();

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