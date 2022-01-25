
import './Product.css'
import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../store/FirebaseContext';
import { Link } from 'react-router-dom';



const Product = ({ match }) => {
    const { firebase } = useContext(FirebaseContext);
    const [data, setData] = useState([]);
  useEffect(() => {
      fetchProduct();
  }, []);
  const fetchProduct = () => {
    firebase.firestore().collection('Clothes').get().then((snapshot)=>{
        const pdata = snapshot.docs.map((product)=>{
        if(product.id===match.params.id){
          return {
            ...product.data(),
            id: product.id
          }}
        else{
            return {}}
        
        })
        const pfdata = pdata.filter(product=>Object.keys(product).length !== 0)
        console.log(pfdata)
        setData(pfdata)
    })}
    return (
    <div>
        
      {data.map((item) => {
          console.log(item)
          
        return (
          <div className='product-container' key={item.id}>
            <div>
              <img className='prod-image' src={item.url} alt='' />
            </div>
            <div>
              <h1 className='brand'>{item.name}</h1>
              <h2>{item.item}</h2>
              <p>{item.description}</p>
              <p>
                <strong>Category:</strong> {item.category}
              </p>
              <p>
                <strong>location:</strong> {item.location}
              </p>
              <p>
                <strong>Date:</strong> {item.date}
              </p>
            </div>
          </div>
        ); 
      })}
    </div>
  );
};
export default Product;