import React, {useState, useContext} from 'react';
import {FirebaseContext} from '../../store/FirebaseContext'
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleLogin = (e) => {
     e.preventDefault()
     firebase.auth().signInWithEmailAndPassword(email, password).then((res)=>{
      dispatch({
        type: "UPDATE_USER",
        payload: res.user
      })
       history.push('/')
     }).catch((error)=>{
      //  alert(error.message)
       document.getElementById('error-container').innerHTML = error.message;       
     })
  }

  const clearForm = () =>{
    document.getElementById('error-container').innerHTML = "";
  }

  var form = document.getElementById('LoginForm');
  if(form)
   form.addEventListener('click',clearForm);

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src="https://www.nicepng.com/png/detail/302-3026464_png-file-svg-login-member-icon-png.png"></img>
        <form onSubmit={handleLogin} id="LoginForm">
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <div id="error-container"></div>
          
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
