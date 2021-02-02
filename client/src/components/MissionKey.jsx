import React from 'react'
import './MissionKey.scss'

export default function MissionKey() {
  return (
    <div className = "my-4 missionKey">
      <p className = "missionKeyItem"> 
        <span className="px-3 mr-2 bg-success missionKeyItem"/>  = Success
      </p>
      <p className = "missionKeyItem"> 
        <span className="px-3 mr-2 bg-danger" />  = Fail
      </p>
    </div>
  )
}
