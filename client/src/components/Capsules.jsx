import {Fragment} from 'react';
import { gql, useQuery } from '@apollo/client';
import { Spinner } from 'react-bootstrap';

import CapsuleItem from './CapsuleItem';

import "./Capsules.scss";

const CAPSULES_QUERY = gql`
  query CapsulesQuery{
    capsules {
      id
      serial
      reuse_count
      water_landings
      land_landings
      type
      status
      last_update
    }
  }
`;

export default function Capsules () {

  const { loading, error, data } = useQuery(CAPSULES_QUERY);

  if (loading) return <Spinner animation="border" variant="dark" className = "spinner"/>;
  if (error) return <p className = "errorMessage"> Whoops. That's an Error </p> ;

  console.log(data.capsules)

  return (
    <Fragment>
      <h3 className="display-5 my-4"> SpaceX Capsules </h3>
      {
        data.capsules.map((capsule) => {
          return <CapsuleItem key = {capsule.id} capsule = {capsule}/>
        })
      }
    </Fragment>
  )
} 