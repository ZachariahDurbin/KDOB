//Creating all Constant Variables
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
//Setting up Environment Variables...
dotenv.config();
const { DB_URI, DB_NAME } = process.env;



//Schemas used for Queries
var schema = buildSchema(`
  type Query {
    hello: String
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
  createUser: async({ name }, { context }) =>{
    const newUser = {
      ...name,
      createdAt: new Date().toISOString(),
    }
    console.log(name);
    console.log(context);
    const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const result = await client.db(DB_NAME).collection('Users').insert(newUser);
    client.close();
    console.log(result);

    return "Added!";
  }
};



//Async Start Function
const start = async () => {

  //Connecting to the MongoDB Database...
  const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const db = client.db(DB_NAME);
  

  //Starting Express...
  var app = express();

  //Using Home Directory for GraphQL Basic Testing Center...
  app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));


  //Listening to Port 400, and Giving User Link to Connect...
  app.listen(4000);
  console.log('🚀 KDOB is at least running, right? Let\'s make sure it\'s actually working: http://localhost:4000/');
}



//Let's Go!
start();