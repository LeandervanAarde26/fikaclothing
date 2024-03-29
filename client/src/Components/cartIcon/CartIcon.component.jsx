import React, {useContext} from 'react';
import {ReactComponent as ShoppingIcon} from "../../Assets/shopping-bag.svg";
import { CartContext } from '../../contexts/CartDrop.context';
import './CartIcon.styles.scss';

export const CartIcon = () => {
    const {showCart, setShowCart, cartCount} = useContext(CartContext);
    const toggleCart = () => setShowCart(!showCart)

    return (
        <div className='cart-icon-container' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    );
};