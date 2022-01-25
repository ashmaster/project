import React, { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom'

import Select from 'react-select';
import './Header.css';

import Search from '../../assets/Search';

import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
import { useSelector } from 'react-redux';




function Header(props) {
  const getParameter = (key) => {

    // Address of the current window
    let address = window.location.search

    // Returns a URLSearchParams object instance
    let parameterList = new URLSearchParams(address)

    // Returning the respected value associated
    // with the provided key
    return parameterList.get(key) ? parameterList.get(key) : '';
  }


  const history = useHistory()
  const { user } = useContext(AuthContext)
  const redState = useSelector(state => state);
  const { firebase } = useContext(FirebaseContext)
  const dataCat = getParameter('dataCat')
  const dataSearch = getParameter('dataSearch')
  console.log(dataCat)
  console.log(dataSearch)
  if (dataCat !== '') {
    props.usecat(dataCat)
  }
  if (dataSearch !== '') {
    props.useSearch(dataSearch)
  }
  const actions = [
    { label: "All", value: '' },
    { label: "Business", value: "Business" },
    { label: "Parties", value: "Parties" },
    { label: "Sports", value: "Sports" }
  ];
  const searchText = useRef(null)
  const handleclick = () => {

    searchText.current.value = "";


    props.useSearch('')
  }
  
  // detect enter key press:
  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      history.push(`?dataCat=${props.cat ? props.cat : ''}&dataSearch=${e.target.value}`)
      props.useSearch(e.target.value)
    }

  };
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={() => { history.push('/') }}>
          {/* <img src="https://th.bing.com/th/id/OIP.RuRAosJwtDBYjJ7S7heNEgAAAA?pid=ImgDet&rs=1" alt="Myntra" className="M" width="50px" height="65px"/> */}
          <img class="logo" width="200" height="48" src="https://allevents.in/img/ae-logo-website.png" title="All Events in City" alt="All events in City logo"></img>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" placeholder='Search Events' onKeyPress={handleKeypress} ref={searchText} />
          <div onClick={handleclick}>X</div>
        </div>
        {/*  <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>*/}
        <div className="language">
          <span>
            <Select options={actions} onChange={(cate) => {
              console.log(cate); props.usecat(cate.value); history.push({
                pathname: '/',
                search: `?dataCat=${cate.value}&dataSearch=${props.search ? props.search : ''}`
              })
            }} />
          </span>
        </div>
        <div className="loginPage" >
          {user ? <span> Welcome {user.displayName} </span> : <span onClick={() => { history.push('/login') }}>Login</span>}
          <hr />

        </div>
        <div className="loginPage">
          {user ? "" : <span onClick={() => { history.push('/signup') }}>Signup</span>}
          <hr />
        </div>
        <div className='logout'>
          {user && <span onClick={() => {
            firebase.auth().signOut();
            history.push('/')
          }}>Logout</span>}
        </div>

        {user &&
          <div className="sellMenu" onClick={() => { history.push('/create') }}>
            <button><span><strong>Create Events</strong></span></button>
          </div>
        }
      </div>
    </div>

  );
}

export default Header;
