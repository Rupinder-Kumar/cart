import React from "react";
import CartPopoverItem from "../CartPopoverItem/CartPopoverItem";
import { CartPopoverContainer, CartPopoverArrow } from "./CartPopoverStyledComponents";
import { CartPopoverItemContainer } from "../CartPopoverItem/CartPopoverItemStyledComponents"
import { useSelector } from "react-redux";

const CartPopover = () => {
    const cartItems =  useSelector(state => state.cart.cartItems);
    return(
        <CartPopoverContainer>
            <CartPopoverArrow />
           {cartItems.length > 0 ? cartItems.map((cartItem) =>  <CartPopoverItem key={cartItem.id} cartItem={cartItem} />) : <CartPopoverItemContainer className="empty"> Your Cart is empty.</CartPopoverItemContainer>}
        </CartPopoverContainer>
    )
}

export default CartPopover;