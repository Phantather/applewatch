import React from 'react';



const Card = ({ products, setProducts, product, setThankOpen}) => {

    const {title, price, image, id} = product;


    const deleteCardHandler = (id) => {
        setProducts(products.filter((item) => item.id !== id))
    };

    const buyCardHandler = (title, image, price) => {
      setThankOpen({
          name: title,
          imageUrl: image,
          price: price,
          buy: true,
      });

        setTimeout(() => {
            setThankOpen({
                name: '',
                imageUrl: '',
                price: null,
                buy: false,
            })
        }, 4000);

    };


    return (
        <div className="content__card">
            <img className='content__card-img' src={image} alt=""/>
            <h3 className='content__card-title'>{title}</h3>
            <p className='content__card-price'>{title !== 'Apple Card' ? `$${price}.00` : price}</p>
            <div className="content__card-btns">
                <button className='content__card-btn' type='button'  onClick={() => buyCardHandler(title, image, price)} >{title === 'Apple Card' ? 'Apply' : 'Buy'}</button>
                <button className="content__card-btn" type='button' onClick={() => deleteCardHandler(id)}> Delete</button>
            </div>
        </div>

    );
};

export default Card;