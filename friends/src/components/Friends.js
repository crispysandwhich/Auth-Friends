import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'


function Friends() {
  const history = useHistory();

  const [friends, setFriends] = useState([])

  useEffect(() => {

    axiosWithAuth().get('/api/friends')
      .then(res => {
        console.log(res.data)
        setFriends(res.data)
      })
      .catch(err => console.log({err}))

  },[])

  const logout = () => {
    console.log('bye')
    localStorage.removeItem('token')
    history.push('/')
  }

  const newFriend = () => {
    console.log('idk')
    history.push('/friends/add')
  }


  if(friends.length === 0){
    return (
      <div>
        <h2>My friends</h2>
        <p>none you looser</p>
      </div>
    )
  }

  return (
    <div className="friendsPage">
      <ul className="friendsNav">
        <li>
          <Link onClick={logout}>logout</Link>
        </li>
        <li>
          <Link to="/friends/add">add new friend</Link>
        </li>
      </ul>
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
