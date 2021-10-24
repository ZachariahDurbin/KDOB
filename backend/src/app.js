//Creating all Constant Variables
const express = require('express');
const mongoose = require('mongoose');
//Setting up Environment Variables...
const dotenv = require('dotenv');
dotenv.config();
const { DB_URI } = process.env;


//Connecting to the MongoDB Database...
mongoose.connect(DB_URI);
mongoose.connection.once('open', ()=>{
  console.log("We have made database connection!");
});


var app = express(); //Starting Express...

const userRouter = require('./router/user.router');



app.use('/user', userRouter);

app.use('/', function(req,res){
  res.json({"foo": "bar"})
});
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


// The root provides a resolver function for each API endpoint
var root = {
  hello: ()=>{
    return "sup dawg"
  },

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
*/