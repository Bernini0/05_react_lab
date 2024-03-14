import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Email(props) {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    return(
    <div className={'inputContainer'}>
        <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
    </div>)
    
}


const Registration = (props) => {
  const [email] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    // You'll update this function later...
    // navigate('/login')
    // if(email=='admin' && password=='1234'){
    //     navigate('/')
    // }
    setEmailError('')
    setPasswordError('')

    // Check if the user has entered both fields correctly
    if ('' === email) {
        setEmailError('Please enter your email')
        return
    }

    if (email=='admin' && password=='1234') {
        setEmailError('Success')
        return
    }

    if ('' === password) {
        setPasswordError('Please enter a password')
        return
    }

    if (password.length < 7) {
        setPasswordError('The password must be 8 characters or longer')
        return
    }

  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <Email email={email} emailError={emailError}/>
      <br />
      <Email email={username} emailError={usernameError}/>
      <br />
      <Email email={password} emailError={passwordError}/>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Register'} />
      </div>
    </div>
  )
}

export default Registration