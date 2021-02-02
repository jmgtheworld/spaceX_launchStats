import React, { Component, Fragment } from 'react'
import { gql, useQuery } from '@apollo/client';
import { Spinner } from 'react-bootstrap';

import LandingZoneItem from './LandingZoneItem';

const LANDINGPADS_QUERY = gql`
  query LandingPadsQuery{
    landingpads {
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

export default function LandingZones() {

  const { loading, error, data } = useQuery(LANDINGPADS_QUERY);

  if (loading) return <Spinner animation="border" variant="dark" className = "spinner"/>;
  if (error) return <p className = "errorMessage"> Whoops. That's an Error </p>;

  console.log(data.landingpads)

  return (
    <Fragment>
      <h3 className="display-5 my-4"> Landing Zones </h3>
      {
        data.landingpads.map((pad) => {
          return <LandingZoneItem key = {pad.id} pad = {pad}/>
        })
      }
    </Fragment>  
  )

}