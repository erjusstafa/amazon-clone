import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                alt="images" />

            {/* Product Id , title , price , rting , image */}
            <div className="home__row">
            <Product
                id="123455"
                title="The Lean Startup : How Constant Innovation Creates"
                price={11.96}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
            />
            <Product
                id="123455"
                title="Gifts in Video Games "
                price={5.96}
                rating={3}
                image="https://m.media-amazon.com/images/I/41QztBTooxL._AC_SY200_.jpg"
            />
        </div>

        <div className="home__row">
        <Product
                id="123455"
                title="A Promised Land (CROWN)"
                price={15.99}
                rating={5}
                image="data:image/webp;base64,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"
            />
            <Product
                id="123455"
                title="Gifts in Video Games "
                price={5.96}
                rating={3}
                image="https://m.media-amazon.com/images/I/41QztBTooxL._AC_SY200_.jpg"
            />
            <Product
                id="123455"
                title="Gifts in Video Games "
                price={5.96}
                rating={3}
                image="https://m.media-amazon.com/images/I/41QztBTooxL._AC_SY200_.jpg"
            />
        </div>
        <div className="home__r0w">
        <Product
                id="123455"
                title="SAMSUNG QN32Q50RAFXZA Flat 32 QLED 4K 32Q50 Series Smart TV "
                price={447.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UY218_.jpg"
            />
        </div>
        </div >
    )
}

export default Home;