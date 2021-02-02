import {Fragment} from 'react';
import { gql, useQuery } from '@apollo/client';
import { Spinner } from 'react-bootstrap';

import CapsuleItem from './LaunchItem';

export default function Capsules () {
  return (
    <Fragment>
      <h3 className="display-5 my-4"> SpaceX Capsules </h3>
      {/* {
        data.launches.map((launch) => {
          return <Capsule key = {launch.id} launch = {launch}/>
        })
      } */}
    </Fragment>
  )
} 