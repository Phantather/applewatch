import React, {useState} from 'react';
import "./main.css"
import Airpods from "../../assets/main/pods.jpg"
import XR from "../../assets/main/xr.jpg"
import TV from "../../assets/main/tv.jpg"
import AppleCard from "../../assets/main/card.jpg"
import Card from "./Card";
import Popup from "./Popup/Popup";
import PopupBuy from "./PopupBuy/PopupBuy";

const Main = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            title: 'Airpods',
            price: 199.00,
            image: Airpods
        }, {
            id: 2,
            title: 'Iphone XR',
            price: 799.00,
            image: XR
        }, {
            id: 3,
            title: 'Apple TV 4K',
            price: 179.00,
            image: TV
        }, {
            id: 4,
            title: 'Apple Card',
            price: 'Free',
            image: AppleCard
        }, {
            id: 5,
            title: 'Airpods',
            price: 199.00,
            image: Airpods
        }, {
            id: 6,
            title: 'Iphone XR',
            price: 799.00,
            image: XR
        }, {
            id: 7,
            title: 'Apple TV 4K',
            price: 179.00,
            image: TV
        }, {
            id: 8,
            title: 'Apple Card',
            price: 'Free',
            image: AppleCard
        }
    ]);

    const [all, setAll] = useState('');

    const [popupOpen, setPopupOpen] = useState(false);

    const [thankOpen, setThankOpen] = useState({
        name: '',
        imageUrl: '',
        price: null,
        buy: false
    });



    return (
        <main>
            <section className="content">
                <div className="container">
                    <div className="content__block">
                        <div className="content__header">
                            <h2 className="content__header-title">
                                Check also
                            </h2>
                            <p className="content__header-see" onClick={() => setAll('all')}>
                                See all >
                            </p>
                        </div>

                        <button className="content__add-card" type="button" onClick={() => setPopupOpen(true)}>Add Card</button>


                        <div className="content__row">
                            {products.filter((item, idx) => {
                                if (all.length === 0) {
                                    return idx < 4
                                } else {
                                    return item
                                }
                            }).map((product) => (
                                <Card  setThankOpen={setThankOpen} setProducts={setProducts} products={products} key={product.id} product={product}/>

                            ))}
                        </div>
                        {
                            all.length !== 0 ? <p className="content__remove-all" onClick={() => setAll('')}>remove all</p> : ''
                        }
                    </div>
                </div>
                <Popup products={products} setProducts={setProducts} popupOpen={popupOpen} setPopupOpen={setPopupOpen}/>
                <PopupBuy key={products.id} products={products} setProducts={setProducts} thankOpen={thankOpen} setThankOpen={setThankOpen} />
            </section>
        </main>
    );
};

export default Main;