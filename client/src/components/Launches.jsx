import React, { Component, Fragment } from 'react'
import { gql, useQuery } from '@apollo/client';
import { Spinner } from 'react-bootstrap';

import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

import "./Launches.scss";

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

  if (loading) return <Spinner animation="border" variant="dark" className = "spinner"/>;
  if (error) return <p>Error : {error} </p>;

  return (

    <Fragment>
      <div className = "LaunchesGroup">
        <h3 className="display-5 my-4 LaunchesTitle"> SpaceX Launches </h3>
        <MissionKey />
      </div>
      {
        data.launches.map((launch) => {
          return <LaunchItem key = {launch.id} launch = {launch}/>
        })
      }
    </Fragment>
    
  )
  
}