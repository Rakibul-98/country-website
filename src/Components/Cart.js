import React from 'react';
import Country from './Country';

const Cart = (props) => {
    const count=props.count
    // let totalPopulation=0;
    // for (let i = 0; i < count.length; i++) {
    //     const country = count[i];
    //     totalPopulation=totalPopulation+country.population
    // }
    const totalPopulation = count.reduce( (sum,country) => sum + country.population , 0)
    return (
        <div>
            <h4>Cart count : {count.length}</h4>
    <h5>Total Population : {totalPopulation}</h5>
        </div>
    );
};

export default Cart;