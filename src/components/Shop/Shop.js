import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meals from '../Meals/Meals';
import './Shop.css'

const Shop = () => {
    const [allMeals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    const handleAddToCart = (allMeals) => {
        console.log(allMeals)
        const newCart = [...cart, allMeals]
        setCart(newCart)
    }

    return (
        <div className='mainView'>
            <div className='meal-info'>
                {
                    allMeals.map(meal => <Meals
                        key={meal.idMeal}
                        meal={meal}
                        handleAddToCart={handleAddToCart}>
                    </Meals>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;