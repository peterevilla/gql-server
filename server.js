const express = require("express");
const express_graphql = require('express-graphql').graphqlHTTP
const {buildSchema} = require('graphql')



//GrapgQL Schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`)
// root resolvers
const root = { message: () => 'Hello World!'}
const server = express();
server.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true,

}))

module.exports = server;