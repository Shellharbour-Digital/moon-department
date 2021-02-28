// api/src/graphql/trending.sdl.js

export const schema = gql`
  type Trending {
    id: String!
    name: String!
    icon: String!
  }

  type Movers {
    rank: Int!
    id: String!
    symbol: String!
    name: String!
    image: String!
    current_price: Float!
    high_24h: Float
    low_24h: Float
    price_change_percentage_24h: Float
    price_change_percentage_1h: Float
  }

  type Query {
    getTrending: [Trending!]!
    getMovers(currency: String!): [Movers!]!
  }
`
