const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const creds = require('./config');
const cors = require('cors')

const app = express();
const PORT = 3005;


mongoose.connect("mongodb+srv://" + creds.DB_LOGIN + ":" + creds.DB_PASS + "@healthandfit.lltsm.mongodb.net/qraphql-react-example?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log("connection to Mongodb successful")},
    (error) => {console.log("Connection to Mongodb failed:"+error)}
);

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(PORT, err => {
    err ? console.log(error) : console.log('Server started!');
})