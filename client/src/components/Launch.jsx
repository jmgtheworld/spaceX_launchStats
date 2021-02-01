import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Moment from 'react-moment';
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

const ROCKET_QUERY = gql`
  query RocketQuery($id: String!) {
    rocket(rocket_id: $id) {
      name
      type
      active
      first_flight
      cost_per_launch
    }
  }
`;

let rocketID = "";

export class Launch extends Component {
  render() {
    let { id } = this.props.match.params;
    return (
      <Fragment>
        <Query query = {LAUNCH_QUERY} variables = {{id}}>
        {
          ({loading, error, data}) => {
            if (loading) return <h4> loading... </h4>
            if (error) console.log(error)
            const {flight_number, name, date_local, success, details, rocket }  = data.launch;
            rocketID = data.launch.rocket;

            return <div>
              <Link to ="/" className = "btn btn-secondary"> Back </Link>
              <h1 className="display-4 my-3"> 
                <span className = "text-dark"> Mission: </span> {name} 
              </h1>
              <h4 className = "mb-3"> Launch Details</h4>
              <ul className = "list-group">
                <li className = "list-group-item"> 
                  Flight_number : {flight_number}
                </li>
                <li className = "list-group-item"> 
                  Local Date : <Moment date= {date_local} format = "YYYY-MM-DD HH:mm" /> 
                </li>
                <li className = "list-group-item"> 
                  Launch Success : <span className = {success ? "text-success" : "text-danger"}> 
                    {success ? "Success" : "Fail"} 
                  </span>
                </li>
                <li className = "list-group-item"> 
                  Details : {details} 
                </li>
                <li className = "list-group-item"> 
                  Rocket ID : {rocket} 
                </li>
              </ul>
            </div>
          }
        }
        </Query>
      </Fragment>
    )
  }
}

export default Launch
