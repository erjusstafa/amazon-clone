import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format';
function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="chechkout__left">
                <img
                    className="checkout_ad"
                    src="https://tse1.mm.bing.net/th?id=OIP.vTpmjrPCvYLtWZhsuwOgbwHaHa&pid=Api&P=0&w=300&h=300"
                    alt="" />

                {/*if (basket === 0 ) 
                return 'Your shoping basket is empty' 
            else
                return 'You shopinng basket'
                */}
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your shoping basket is empty</h2>
                        <p>You have no items in your brasket. To
                        buy one ore more iems click "Add Brasket" </p>
                    </div>
                ) : (
                        <div>
                            <h2>You shopinng basket</h2>
                            {basket?.map((item) => {

                                console.log(item);

                                return (

                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                );
                            })}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                     <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
