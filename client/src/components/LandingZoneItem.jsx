import React from 'react'

import { Link } from 'react-router-dom';

import './LandingZoneItem.scss';

export default function LandingZoneItem(props) {

  const {id, name, full_name, locality, region,  landing_attempts, landing_successes, details, launches, status}  = props.pad
  
  return (
    <div className = "card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4> {full_name} ({name}) </h4>
          <p className = "text-white font-weight-bold"> {region} {locality} </p> 
          <ul className = "list-group">
            <li className = "list-group-item"> 
              <p className = "text-white lzItem"> Status: <span className = {status === "active" ? "text-success" : "text-danger"} > {status}</span> </p> 
            </li>
            <li className = "list-group-item"> 
              <p className = "text-white lzItem"> # of Launches: {launches.length} </p> 
            </li>
            <li className = "list-group-item"> 
              <p className = "text-white lzItem"> Landing Attempts: {landing_attempts} </p>
            </li>
            <li className = "list-group-item"> 
              <p className = "text-white lzItem"> Landing Successes: {landing_successes} </p>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <Link to = {`landingZones/${id}`} className = "btn btn-secondary"> Landing Zone Details </Link>
        </div>

      </div>
    </div>
  )
}
