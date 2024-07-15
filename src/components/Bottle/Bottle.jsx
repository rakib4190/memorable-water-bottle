import React from 'react';
import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    //console.log(bottle)
    const { name, img,price } = bottle;
    return (
        <div className='bottle'>
            <h3> {name} </h3>
            <img src={img} alt="" />
            <p>Price: ${price} </p>
            <button onClick={()=>handleAddToCart(bottle)} >Add to Cart</button>
        </div>
    );
};

export default Bottle;