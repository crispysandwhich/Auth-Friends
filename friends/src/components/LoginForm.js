import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const deState = {
  username: '',
  password: ''
}

function LoginForm() {
  const history = useHistory()
  const [initialValue, setinitialValue] = useState(deState)
  const [err, setErr] = useState('')


  const handleChange = (e) => {
    const {name, value} = e.target
    setinitialValue({
      ...initialValue,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/login', initialValue)
      .then(res => {
        localStorage.setItem('token', JSON.stringify(res.data.payload))
        history.push('/friends')
      })
      .catch(err => setErr(err.response.data.error))
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="username" type="text" name="username" onChange={handleChange} />
        <input placeholder="password" type="password" name="password" onChange={handleChange}/>
        <button>Submit</button>
      </form>
      <p>{err}</p>
    </div>
  )
}

export default LoginForm
