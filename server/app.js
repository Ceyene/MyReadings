const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const app = express();

//connect to mongodb database
mongoose.connect(
  "mongodb+srv://ceyuser:ZCtdukH3742oSv13@mybooksapp.9r8kq.mongodb.net/myBooksApp?retryWrites=true&w=majority"
);
//Event listener: once the connection is open, it runs a callback
mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
