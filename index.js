const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
   type Query {
      hello: String
      numberOfAnimals: Int
   }
`;

const resolvers = {
   Query: {
      hello: () => {
         return 'world!!!';
      },
      numberOfAnimals: () => {
         return 100;
      },
   },
};

const server = new ApolloServer({
   typeDefs,
   resolvers,
});

server.listen().then(({ url }) => {
   console.log('Server is running... ' + url);
});
