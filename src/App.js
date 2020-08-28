import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './Components/Country';
import Cart from './Components/Cart';

function App() {
  const [countries,setCountries]=useState([]);

  useEffect( () => {
      fetch('https://restcountries.eu/rest/v2/all')
      .then( res => res.json())
      .then( data => {
        const names = data.map( country => country.name)
        
        setCountries(data) 
      })
      
  }, [])

      const [count,setCount]=useState([])
      const addButton=(country)=>{
        var newCount=[...count, country];
        setCount(newCount)
      }
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>Country loaded : {countries.length}</h1>
        <h3>country added : {count.length}</h3>
        <Cart count={count}></Cart>
        <ul>
            {
              countries.map( country => <Country country={country}  addButton={addButton} key={country.alpha3Code}></Country>)
            }
        </ul>
        
      </header>
    </div>
  );
}

export default App;
