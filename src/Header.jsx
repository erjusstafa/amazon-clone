import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import {useStateValue} from './StateProvider';



function Header() {

    const  [{ basket }] = useStateValue();

    console.log(basket)
    return (
        <nav className="header">

            {/* logo on the left  -> img*/}
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://tse1.mm.bing.net/th?id=OIP.WGxtnw81X7exO2PxiVlL9QHaEK&pid=Api&rs=1&c=1&qlt=95&w=184&h=103"
                    alt="logo-amazon" />
            </Link>



            {/* search-box*/}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>


            {/* 3 links*/}
            <div className="header__nav">
                {/* lst-1 links*/}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello eroo</span>
                        <span className="header__optionLineTwo">Sign In </span>
                    </div>
                </Link>

                {/* lst-2 links*/}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* lst-3 links*/}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* lst-4 links*/}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasket />
                        <span className="header__optionLineTwo header__basketCount">
                        {basket?.length}
                        </span>
                    </div>
                </Link>

            </div>
            {/* basket icon with  number*/}

        </nav>
    )
}

export default Header

