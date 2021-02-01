import React, { Component, Fragment, useState } from 'react'
import { gql, useQuery } from '@apollo/client';

import { Spinner } from 'react-bootstrap';

import Moment from 'react-moment';
import { Link } from 'react-router-dom';


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



export default function Launch (props) {

  const [ launchID, setlaunchID ] = useState(props.match.params.launch_id)
  console.log(launchID)

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: {id: launchID},
  });

  if (loading) return <Spinner animation="border" variant="light" />;
  if (error) return `Error! ${error}`;

  console.log(data)

  const {flight_number, name, rocket, success, details, date_local}  = data.launch;

  return (
        <Fragment>
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
        </Fragment>
    )


}


