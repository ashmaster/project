import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';
import { FirebaseContext ,AuthContext } from '../../store/FirebaseContext';

const Create = () => {
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const history = useHistory()
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [des, setDes] = useState('');
  const [edate, setEdate] = useState('');
  const [image, setImage] = useState('');
  const date = new Date()
  const handleSubmit = (event) =>{
    event.preventDefault();
       firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref}) => {
         ref.getDownloadURL().then((url)=>{
            console.log(url)
            firebase.firestore().collection('Clothes').add({
              name,
              category,
             date: edate,
             location: location,
              description:des,
              url,
              createdAt: date.toDateString()
            })
            .then(()=>{
              if(!window.confirm("The event have been added, Do you want to add more events?")){
                 history.push('/');
             
               }
             })
         })
       })
  }
  return (
    <Fragment>
      <Header />
      <card>

        <form onSubmit={handleSubmit}>
        <div className="centerDiv">
            <h1 className='header1' style={{color :"#136772", textAlign : 'center'}}>Add an event</h1>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value = {name}
              id="fname"
              onChange={(e) => setName(e.target.value)} 
              name="Name"
              defaultValue="John"
              required
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              id="fname"
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              defaultValue="John"
              required
            />
            <br />
            <label htmlFor="fname">Date</label>
            <br />
            <input className="input" type="date" value={edate} id="fname" onChange={(e) => setEdate(e.target.value)} name="Date" required />
            <br />
            <label htmlFor="fname">Location</label>
            <br />
            <input className="input" type="text" value={location} id="fname" onChange={(e) => setLocation(e.target.value)} name="location" required/>
            <br />
            <label htmlFor="fname" >Description</label>
            <br />
            <input className="input" type="text" value={des} id="fname" onChange={(e) => setDes(e.target.value)} name="Des" required />
            <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
            <br />
            <input onChange={(e) =>{
               setImage(e.target.files[0])
            }} type="file"
            required/>
            <br />
            <input type = "submit"  className="uploadBtn"  />
        </div>
        </form>
      </card>
    </Fragment>
  );
};

export default Create;
