import React from 'react'
import './CapsuleItem.scss';

export default function CapsuleItem(props) {

  const {id, serial, reuse_count, water_landings, land_landings, type, status, last_update}  = props.capsule
  
  return (
    <div className = "card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h5 className = "capsuleType"> Capsule Type: {type} <span className ="text-primary"> (Serial #: {serial}) </span> </h5>
          <ul className = "list-group">
            <li className = "list-group-item"> 
              <p className = "text-white capsuleID"> Capsule ID: {id} </p>
            </li>
            <li className = "list-group-item"> 
              <p className = "text-white capsuleItem"> Reuse Count: {reuse_count} </p>
            </li>
            <li className = "list-group-item">
              <p className = "text-white capsuleItem"> Water Landings: {water_landings} </p>
            </li>
            <li className = "list-group-item">
              <p className = "text-white capsuleItem"> Land Landings: {land_landings} </p>
            </li>
            <li className = "list-group-item">
              <p className = "text-white capsuleItem"> Status: <span className = {status === "active" ? "text-success" : "text-danger" }> {status} </span></p>
            </li>
            <li className = "list-group-item">
              <p className = "text-white capsuleItem"> Last Update: {last_update ? last_update : "No Update Provided"} </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}