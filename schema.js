const axios = require('axios');

const { 
  GraphQLObjectType, 
  GraphQLInt, 
  GraphQLString, 
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

// Launch Type
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
    flickr_images: {type: new GraphQLList(GraphQLString) },
    active: {type: GraphQLBoolean},
    type: { type: GraphQLString },
    boosters: { type: GraphQLInt},
    first_flight: { type: GraphQLString },
    cost_per_launch: { type: GraphQLInt }
  })
})

//Rocket Type
const CapsuleType = new GraphQLObjectType({
  name: 'Capsule',
  fields: () => ({
    id: { type: GraphQLString },
    serial: { type: GraphQLString },
    reuse_count: { type: GraphQLInt },
    water_landings: { type: GraphQLInt },
    land_landings: { type: GraphQLInt },
    type: { type: GraphQLString },
    status: { type: GraphQLString },
    last_update: { type: GraphQLString },
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
    },

    capsules: {
      type: new GraphQLList(CapsuleType),
      resolve(parent, args) {
        return axios.get('https://api.spacexdata.com/v4/capsules')
        .then(res => res.data);
      }
    }

  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
});

