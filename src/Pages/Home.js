import React , {useState} from 'react';

import Header from '../Components/Header/Header';
// import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';

function Home(props) {
  const [category, setcategory] = useState('');
  const [search, setsearch] = useState('');
  return (
    <div className="homeParentDiv">
      <Header cat = {category} usecat = {setcategory} search = {search} useSearch = {setsearch} />
      {/* <Banner /> */}
      <Posts cat = {category} usecat = {setcategory} search = {search} useSearch = {setsearch}/>
      <Footer />
    </div>
  );
}

export default Home;
 
