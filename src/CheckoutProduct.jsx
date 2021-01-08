import React from 'react'
import Rating from '@material-ui/lab/Rating';
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider';


function CheckoutProduct({ id, title, image, price, rating }) {
   
    const  [{basket} , dispatch] = useStateValue();
 
    console.log(id, title, image, price, rating );
    
    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id : id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">


                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    <Rating value={rating} />
                </div>


                <button onClick={removeFromBasket}>Remove to basket</button>   {/*basket === shporta */}
            </div>
        </div>
    )
}

export default CheckoutProduct
