import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    const handleAddToCart = bottle =>{
        //console.log('add this to the cart item');
        const cartBottle = [...cart, bottle];
        //console.log(cartBottle);
        setCart(cartBottle);
    }

    useEffect(() =>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[]);
    return (
        <div>
            <h1>Memorable Bottle are: {bottles.length}</h1>
            <div>
                <h2>Cart Items: {cart.length} </h2>

            </div>
            <div className='bottle-container'>
            {
                bottles.map(bottle => <Bottle 
                    bottle = {bottle}
                    key={bottle.id}
                    handleAddToCart= {handleAddToCart}
                    ></Bottle>)
            }

            </div>
        </div>
    );
};

export default Bottles;