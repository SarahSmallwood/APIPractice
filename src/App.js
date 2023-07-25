import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Pet from './Pet';
import { Organization } from "../src/api/animals";

function App() {
const apiKey = ['v31bDTFNK8AuZ7lf2AAwlCp31ShkdJJboZIctzEmJHfxhmHGfV']
const apiSecret = ['lxvPjBE53QrHikVgmOHjB1KmTTaqTgUVOwM1WWlU']
const [pet, setPet] = useState({})

const getPet= async() => {
const response = await axios.get('https://api.petfinder.com/v2/animals?type=dog&page=2')
    // GET THE RESPONSE , LOOK FOR THE KEYS
  const data = await response.animals
  
  console.log(data.animals)

  setPet(data.animals)
  // save to state so u can pass as props (or) render to browser
}
useEffect(()=>{
  getPet()
},[])



  return (
    <div className="App">
      <Pet  allInfo={animals} />
    </div>
  );
}

export default App;


