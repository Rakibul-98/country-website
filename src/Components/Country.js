import React from 'react';
import './Country.css'
const Country = (props) => {
    const{name,capital,demonym,flag,population}=props.country;
    const flagStyle={
        height:'60px',
        width:'100px'
    }
    const addButton=props.addButton
    return (
        <div className='country'>
            <h1> Country Name : {name}</h1>
            <img style={flagStyle} src={flag} alt=""/>
            <h2>Capital Name : {capital}</h2>
            <p>Pupulation : {population}</p>
            <h3>Currency : {demonym}</h3>
            <button onClick={()=>addButton(props.country)}>Add Countries</button>
        </div>
    );
};

export default Country;