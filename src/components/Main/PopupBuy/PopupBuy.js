import React from 'react';
import "./popup-buy.css"

const PopupBuy = ({ thankOpen, setThankOpen , products, setProducts, product}) => {

    const {buy, name, price, imageUrl} = thankOpen;


    return (
        <div className="popup__buy-overlay" style={{display: buy ? 'flex' : 'none'}}>
            <div className="popup__buy-popup">
                <h2>Спасибо за покупку</h2>
                <img className="popup__buy-img" src={imageUrl} alt={name}/>
                <h3 className="popup__buy-title">{name}</h3>
                <p className="popup__buy-price">Цена товара : {name === 'Apple Card' ? '' : '$'}{price}</p>
            </div>
        </div>
    );
};

export default PopupBuy;