import React from 'react'

function AddFriends() {
  return (
    <div>
      <form>
        <label>
          Name: 
          <input type="text"/>
        </label>
        <label>
          Age:
          <input type="number"/>
        </label>
        <label>
          Email:
          <input type="text" />
        </label>
      </form>
    </div>
  )
}

export default AddFriends
