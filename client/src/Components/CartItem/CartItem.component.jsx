import React, { useContext } from 'react';
import "./CartItem.styles.scss";
import { CartContext } from '../../contexts/CartDrop.context';


const CartItem = ({ cartItems, add }) => {
    const { name, images, price, quantity, size, color } = cartItems;
    const { addItemToCart, removeEntireItem, removeItemFromCart } = useContext(CartContext);
    const addItem = () => addItemToCart(cartItems);
    const removeItem = () => removeItemFromCart(cartItems);
    const clearCartItem = () => { removeEntireItem(cartItems) };

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                {
                    Array.isArray(images) ?
                        <img src={images[0]} alt={name} />
                        :
                        <img src={images} alt={name} />
                }
            </div>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItem}> &#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItem}>&#10095;</div>
            </span>
            <span className='size'>{size}</span>
            <div className='color' style={{
                backgroundColor: `${color}`,
                borderRadius: `55px`
            }}>
            </div>
            <div className='remove-button' onClick={clearCartItem}> &#10005;</div>
        </div>
    );
};

export default CartItem;