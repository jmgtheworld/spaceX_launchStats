import React from 'react'

import { Link } from 'react-router-dom';

export default function LandingZoneItem(props) {

  const {id, name, full_name, status, locality, region, latitude, longitude, landing_attempts, landing_successes, details}  = props.pad
  
  return (
    <div className = "card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4> {full_name} ({name}) </h4>
          <p className = "text-white font-weight-bold"> {region} {locality} </p> 
          <p className = "text-white"> Landing Attempts: {landing_attempts} </p>
          <p className = "text-success"> Landing Successes: {landing_successes} </p>
        </div>
        <div className="col-md-3">
          <Link to = {`landingZones/${id}`} className = "btn btn-secondary"> Landing Zone Details </Link>
        </div>

      </div>
    </div>
  )
}
