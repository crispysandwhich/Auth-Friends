import React, {useEffect, useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'


function Friends() {

  const [friends, setFriends] = useState([])

  useEffect(() => {

    axiosWithAuth().get('/api/friends')
      .then(res => {
        console.log(res.data)
        setFriends(res.data)
      })
      .catch(err => console.log({err}))

  },[])


  if(friends.length < 0){
    return (
      <div>
        <h2>My friends</h2>
        <p>none you looser</p>
      </div>
    )
  }

  return (
    <div>
      <h2>My friends</h2>
      <div>
      {
        friends.map(friend => {
          return (
            <div key={friend.id}>
              {friend.name}
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Friends
