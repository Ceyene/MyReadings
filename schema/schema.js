const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

//dummy data
let books = [
  { name: "Elantris", genre: "Fantasy", id: "1", authorId: "1" },
  { name: "Mort", genre: "Fantasy", id: "2", authorId: "2" },
  { name: "The Metamorphosis", genre: "Terror", id: "3", authorId: "3" },
  { name: "Final del juego", genre: "Short Stories", id: "4", authorId: "4" },
  { name: "Pride and Prejudice", genre: "Romance", id: "5", authorId: "5" },
  { name: "The Call of Cthulhu", genre: "Terror", id: "6", authorId: "6" },
  { name: "Equal Rites", genre: "Comedy", id: "7", authorId: "2" },
  { name: "Mistborn", genre: "Fantasy", id: "8", authorId: "1" },
  { name: "Rayuela", genre: "Classic", id: "9", authorId: "4" },
];

let authors = [
  { name: "Brandon Sanderson", age: "44", id: "1" },
  { name: "Terry Pratchett", age: "100", id: "2" },
  { name: "Franz Kafka", age: "200", id: "3" },
  { name: "Julio Cortázar", age: "300", id: "4" },
  { name: "Jane Austen", age: "400", id: "5" },
  { name: "H.P.Lovecraft", age: "600", id: "6" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return _.find(authors, { id: parent.authorId });
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { authorId: parent.id });
      },
    },
  }),
});

//root queries
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db/ other source
        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
