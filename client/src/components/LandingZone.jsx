
import React, { Fragment, useState } from 'react'
import { gql, useQuery } from '@apollo/client';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Map from './Map';

import "./LandingZone.scss";

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
      status
      launches
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
  const {name, full_name, locality, region, latitude, longitude, details, status, launches }  = data.landingpad;

  return (
    <Fragment>

      <h3 className="display-4 my-3"> 
        <span className = "text-white landingzoneH3"> {full_name} ({name}) </span> 
      </h3>

      <Link to = "/landingZones" className = "btn btn-secondary"> Back </Link>

      <div className = "detailContainer">
        <h4 className = "mb-3"> Landing Zone Details</h4>
        <div className = "landingzoneDetail">
        <h5 className = "mb-3"> Status: <span className = {status === "active" ? "text-success" : "text-danger"} > {status} </span> </h5>
        <h5 className = "mb-3"> Location: {region}, {locality} </h5>
        </div>
        <ul className = "list-group">
          <li className = "list-group-item details"> 
            Details : {details}
          </li>
        </ul>
      </div>

      <Map lat = {latitude} lng = {longitude} />

    </Fragment>
  )
}
