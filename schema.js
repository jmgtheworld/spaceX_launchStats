const axios = require('axios');

const { 
  GraphQLObjectType, 
  GraphQLInt, 
  GraphQLString, 
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

// Laucn Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    id: {type: GraphQLString},
    name: { type: GraphQLString },
    date_utc: { type: GraphQLString },
    date_local: { type: GraphQLString },
    success: { type: GraphQLBoolean },
    details: {type: GraphQLString},
    rocket: { type: GraphQLString },
  })
})

//Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    boosters: { type: GraphQLInt},
    first_flight: { type: GraphQLString },
    cost_per_launch: { type: GraphQLInt }
  })
})

//Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios.get('https://api.spacexdata.com/v4/launches')
        .then(res => res.data);
      }
    },
    launch: {
      type: LaunchType,
      args: {
        launch_id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v4/launches/${args.launch_id}`)
        .then(res => res.data);
      }
    }, 
    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent, args) {
        return axios.get('https://api.spacexdata.com/v4/rockets')
        .then(res => res.data);
      }
    },
    rocket: {
      type: RocketType,
      args: {
        rocket_id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v4/rockets/${args.rocket_id}`)
        .then(res => res.data);
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
});

