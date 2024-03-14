// import logo from './logo.svg';
// import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const App = (props) => {
//   const { loggedIn, email } = props
//   const navigate = useNavigate()

//   const onButtonClick = () => {
//     // You'll update this function later
//   }

//   return (
//     <div className="mainContainer">
//       <div className={'titleContainer'}>
//         <div>Welcome!</div>
//       </div>
//       <div>This is the home page.</div>
//       <div className={'buttonContainer'}>
//         <input
//           className={'inputButton'}
//           type="button"
//           onClick={onButtonClick}
//           value={loggedIn ? 'Log out' : 'Log in'}
//         />
//         {loggedIn ? <div>Your email address is {email}</div> : <div />}
//       </div>
//     </div>
//   )
// }

// export default App


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Login from './login'
import './App.css'
import { useEffect, useState } from 'react'
import Registration from './registration'
import First from './First'
import TaskManager from './TaskManager'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/taskmanager" element={<TaskManager/>} />
          <Route path="/registration" element={<Registration setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App