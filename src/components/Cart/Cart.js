import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let mealName = ''
    for (const meal of cart) {
        mealName = mealName + meal.strMeal + ', '
    }
    return (
        <div className='cart'>
            <h2>My Cart</h2>
            <p><small>Total Items Selected: {cart.length}</small></p>
            <p><small>Meal Name: {mealName}</small></p>
        </div>
    );
};

export default Cart;