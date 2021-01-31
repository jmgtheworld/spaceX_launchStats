import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const LAUNCH_QUERY = gql`
  query LaunchQuery($id: String!) {
    launch(launch_id: $id) {
      flight_number
      name
      date_local
      success
      details 
      rocket
    }
  }
`;

export class Launch extends Component {
  render() {
    let { id } = this.props.match.params;
    console.log(id)
    return (
      <Fragment>
        <Query query = {LAUNCH_QUERY} variables = {{id}}>
        {
          (loading, error, data) => {
            console.log('data', data)
            if (loading) return <h4> loading... </h4>
            if (error) console.log(error)
            console.log(data)

            const {flight_number, name, date_local, success, details, rocket }  = data.launch;

            return <div>
              <h1 className="display-4 my-3"> <span className = "text-dark"> Mission: </span> {name} </h1>
            </div>
          }
        }
        </Query>
      </Fragment>
    )
  }
}

export default Launch
