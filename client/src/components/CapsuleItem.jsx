import React from 'react'
import './CapsuleItem.scss';

export default function CapsuleItem(props) {

  const {id, serial, reuse_count, water_landings, land_landings, type, status, last_update}  = props.capsule
  
  return (
    <div className = "card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h5 className = "text-white capsuleType"> Capsule Type: {type} <span className ="text-primary"> (Serial #: {serial}) </span> </h5>
          <p className = "text-white capsuleID"> Capsule ID: {id} </p>
          <p> Reuse Count: {reuse_count} </p>
          <p> Water Landings: {water_landings} </p>
          <p> Land Landings: {land_landings} </p>
          <p> Status: <span className = {status === "active" ? "text-success" : "text-danger" }> {status} </span></p>
          <p> Reuse Count: {reuse_count} </p>
          <p> Last Update: {last_update ? last_update : "No Update Provided"} </p>
        </div>
      </div>
    </div>
  )
}