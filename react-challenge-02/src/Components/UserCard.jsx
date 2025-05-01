  import React from 'react'
  import './UserCard.css'
  
  function UserCard({ name, age, location }) {
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h3>{age}</h3>
        <h3>{location}</h3>
      </div>
    )
  }
  
  export default UserCard