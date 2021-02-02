import React, { Fragment } from 'react'
import './About.scss';

export default function About() {
  return (
    <Fragment>
    <h3 className="display-5 my-4"> About This App </h3>
    <p className = "aboutParagraph"> This app was created using SpaceX REST API. 
      For more info, visit their github page 
      <a href= "https://github.com/r-spacex/SpaceX-API" target = "blank"> here </a>.
    </p>
    </Fragment> 
  )
}
