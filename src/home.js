import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    // You'll update this function later
    // navigate
    // navigate('/registration')
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Logged In!</div>
      </div>
      <div>This is the home page.</div>
    </div>
  )
}

export default Home