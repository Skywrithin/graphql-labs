const { ApolloServer, gql } = require("apollo-server");

// String, Int, Float, Boolean 

const typeDefs = gql`
    type Query {
        hello: [String]
        products: [Product]
    }

    type Product {
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        
    }
`;

const resolvers = {
    Query: {
        hello: () => {
            return ["World!", "Boolden", "Test"]
        },
        products: () => {
            return [{
                name: "Bike",
                description: "Mountain Bike",
                quantity: 20,
                price: 99.99,
                onSale: false
            }]
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({url}) => {
    console.log("Server is ready at: " + url)
})

