import React from 'react';
import './Meals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Meals = (props) => {

    const { strMealThumb, strMeal, strInstructions } = props.meal
    return (
        <div className='meals'>
            <div style={{ padding: 5, marginBottom: 20 }}>
                <img src={strMealThumb} alt="" />
                <p>{strMeal}</p>
                <p>Instructions: {strInstructions.slice(0, 200)}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.meal)} className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Meals;