import React from 'react'

const Contacts = ({ list }) => {
  return (
    <div>
      <h1>Contact List</h1>
        <div>
          <h2>{list.login}</h2>
          <h2>{list.id}</h2>
          <h2>{list.avatar_url}</h2>
        </div>
      </div>

  )
};

export default Contacts;