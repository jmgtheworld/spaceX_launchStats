
import React, { Fragment, useState } from 'react'
import { gql, useQuery } from '@apollo/client';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Map from './Map';

const LANDINGPAD_QUERY = gql`
  query LandingPadsQuery($id: String!){
    landingpad(landingpad_id: $id) {
      id
      name
      full_name
      status
      locality
      region
      latitude
      longitude
      landing_attempts
      landing_successes
      details
    }
  }
`;

export default function LandingZone(props) {

  const [ padID, setpadID ] = useState(props.match.params.landingpad_id);

  const { loading, error, data } = useQuery(LANDINGPAD_QUERY, {
    variables: {id: padID},
  });

  if (loading) return <Spinner animation="border" variant="dark" className = "spinner"/>;
  if (error) return (
    <Fragment> 
      <Link to = "/" className = "btn btn-secondary back" > Back to Landing Zones </Link> 
      <p className = "errorMessage"> Whoops. That's an Error </p> 
    </Fragment>
  )

  console.log(data)
  const {name, full_name, latitude, longitude, details }  = data.landingpad;

  return (
    <Fragment>

      <h1 className="display-4 my-3"> 
        <span className = "text-white"> {full_name} ({name}) </span> 
      </h1>

      <Link to = "/" className = "btn btn-secondary"> Back </Link>

      <div className = "detailContainer">
        <h4 className = "mb-3"> Landing Zone Details</h4>
        <ul className = "list-group">
          <li className = "list-group-item"> 
            Details : {details}
          </li>
        </ul>
      </div>

      <Map lat = {latitude} lng = {longitude} />

    </Fragment>
  )
}
