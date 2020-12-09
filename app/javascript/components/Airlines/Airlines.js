import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const Airline = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {
    // Get all of our airlines from api
    // Update airlines in our state

    axios.get('/api/v1/airlines.json')
    .then( resp => {
      setAirlines(resp.data.data)
    })
    .catch( resp => console.log(resp) )

  }, [airlines.length])

  const list = airlines.map( item => {
    return(<li key={item.attributes.name}>{item.attributes.name}</li>)
  })

  return(
    <div className="home">
      <div className="header">
        <h1>OpenFlights</h1>
        <div className="subheader">Honest, unbased airline reviews</div>
      </div>
      <div className="grid">
        <ul>
          {list}
        </ul>
      </div>
    </div>
  )
}

export default Airline
