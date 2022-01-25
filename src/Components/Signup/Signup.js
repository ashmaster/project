import React, { useState, useContext } from 'react';


import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
import {useHistory} from 'react-router-dom'
import './Signup.css';


export default function Signup() {
  const history = useHistory()
  const [username,setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result)=>{
      result.user.updateProfile({displayName: username}).then(()=>{
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          history.push("/login")

        })
      })
    }).catch(error => document.getElementById('error-container').innerHTML = error.message)
  }

  const clearForm = () =>{
    document.getElementById('error-container').innerHTML = "";
  }

  var form = document.getElementById('SignUpForm');
  if(form)
   form.addEventListener('click',clearForm);

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src="https://icon-library.com/images/sign-up-icon/sign-up-icon-29.jpg"></img>
        <form onSubmit={handleSubmit} id="SignUpForm">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
            required
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            id="lname"
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            defaultValue="Doe"
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
          <button>Signup</button>
        </form>
      </div>
    </div>
  );
}
