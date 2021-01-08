import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css';
import {useStateValue} from './StateProvider';
import {getBasketTotal} from './reducer'

function Subtotal() {

    const  [{basket} , dispatch] = useStateValue();

    return (
        <div className="subtotal">

            <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    Subttotalc({basket.length} items): <strong>{``}</strong>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This orders contains 
                    </small>
                </p>
                </>
            )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed  to Checkout</button>
        </div>
    )
}

export default Subtotal
