//Creating all Constant Variables
const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/initialization');
const jwt = require('jsonwebtoken');

//Setting up Environment Variables...
const dotenv = require('dotenv');
dotenv.config();
const { DB_URI, JWT_SECRET } = process.env;


const getToken = (user) => jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '30 days' });

const getUserFromToken = async (token, db) => {
  if(!token) return null;

  const tokenData = jwt.verify(token, JWT_SECRET);
  if(!tokenData?.id) return null;
  return await db.collection('users').findOne({ _id: mongoose.isValidObjectId(tokenData.id) });
}

//Connecting to the MongoDB Database...
mongoose.connect(DB_URI);
mongoose.connection.once('open', ()=>{
  console.log("We have made database connection!");
});/*

// authentication middleware
const authMiddleware = jwt({
  secret: 'securesecret'
})

app.use(authMiddleware)
*/

var app = express(); //Starting Express...

var cors = require('cors');

app.use(cors()); // Use this after the variable declaration

const loggingMiddleware = (req, res, next) => {
  console.log('ip:', req.ip);
  next();
}
app.use(loggingMiddleware);
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: false
}));
app.use('/graphql-sandbox', graphqlHTTP({
  schema,
  graphiql: true
}));

//Listening to Port 4000, and Giving User Link to Connect...
app.listen(4000);
console.log('🚀 KDOB is at least running, right? Let\'s make sure it\'s actually working: http://localhost:4000/');


/*
//Schemas used for Queries
var schema = buildSchema(`
  type Query {
    hello: String!
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
*/