const express = require("express");
const router = express.Router();
const { graphqlHTTP } = require('express-graphql');
const schema = require('../graphql/board');



//Using Home Directory for GraphQL Basic Testing Center...
router.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

router.use('/', function(req,res){
    res.json({"Board check!":"lol"})
});
 
  
module.exports = router;