const express = require("express");
const router = express.Router();
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema/graphql/motd');



//Using Home Directory for GraphQL Basic Testing Center...
router.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

router.use('/', function(req,res){
    res.json({"Welcome to Backgammon":"lol"})
});


module.exports = router;