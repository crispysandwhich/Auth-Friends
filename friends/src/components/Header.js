import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="main-header">
      <h2>What is life?</h2>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friends">Friends</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
