import React, { useMemo } from 'react'
import { CartContainer, CartItemCount, CartAmount, CartIconContainer, TriangleDown } from './CartStyledComponents';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg"
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const currency = cartItems.length > 0 ?  cartItems[0].currency : '$';
    const { total, itemCount } = useMemo(() => {
        return {
            total: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0),
            itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
        }
    }, [cartItems]);

    return (
        <>
            <CartContainer>
                <CartAmount>{currency}{total}</CartAmount>
                <CartItemCount>{itemCount} Items <TriangleDown>&#9662;</TriangleDown></CartItemCount>
            </CartContainer>
            <CartIconContainer><CartIcon onClick={() => dispatch(toggleCartHidden())} width="24px" height="24px" /></CartIconContainer>
        </>
    )
}

export default Cart;