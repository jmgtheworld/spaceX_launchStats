import React, { Component, Fragment } from 'react'
import { gql, useQuery } from '@apollo/client';
import { Spinner } from 'react-bootstrap';

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

export default function Launches() {

  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <Spinner animation="border" variant="light" />;
  if (error) return <p>Error : {error} </p>;

  return (

    <Fragment>
      <h1 className="display-4 my-3"> Launches </h1>
      <MissionKey />
      {
        data.launches.map((launch) => {
          return <LaunchItem key = {launch.id} launch = {launch}/>
        })
      }
    </Fragment>
    
  )
  
}

