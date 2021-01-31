import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery{
    launches {
      id
      flight_number
      name
      date_local
      success
      details
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3"> Launches </h1>
        <MissionKey />
        <Query query = {LAUNCHES_QUERY}>
          {
            ({ loading, error, data }) => {
              if (loading) return <h4> loading.. </h4>
              if (error) return console.log(error)

              return <Fragment>
                {
                  data.launches.map((launch) => {
                    return <LaunchItem key = {launch.id} launch = {launch}/>
                  })
                }

              </Fragment>
            }
          }
        </Query>
      </Fragment>
    )
  }
}

export default Launches
