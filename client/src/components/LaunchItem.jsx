import React from 'react'
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function LaunchItem(props) {
  const {id, flight_number, name, date_local, success, details} = props.launch;

  return (
    <div className = "card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4> Mission: <span className = {classNames({
            'text-success' : success,
            'text-danger' : !success
          })}> {name} </span> </h4>
          <p> Date: <Moment date= {date_local} format = "YYYY-MM-DD HH:mm" /> </p>
        </div>
        <div className="col-md-3">
          <Link to = {`/launch/${id}`} className = "btn btn-secondary"> Launch Details </Link>
        </div>

      </div>
    </div>
  )
}
