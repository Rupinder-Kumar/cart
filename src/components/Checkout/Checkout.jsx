import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { EmptyCart, CheckoutContainer } from "./CheckoutStyledComponents";

const Checkout = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    return (
        <CheckoutContainer>
            {cartItems.length > 0 ?
             cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)
            : <EmptyCart>Your Cart is empty.</EmptyCart>}
        </CheckoutContainer>
    )
}

export default Checkout