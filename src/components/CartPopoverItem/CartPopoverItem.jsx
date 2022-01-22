import React from "react";
import { useDispatch } from "react-redux";
import { CartPopoverItemContainer, ProductDescriptionContainer, CrossIcon, ProductDescription, ProductTitle, ProductPrice, ProductQuantity } from "./CartPopoverItemStyledComponents";
import { clearItemFromCart } from "../../redux/cart/cart.actions";

const CartPopoverItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const { title, currency, price, quantity } = cartItem;
    return(
        <CartPopoverItemContainer>
            <ProductDescriptionContainer>
                <CrossIcon onClick={() => dispatch(clearItemFromCart(cartItem))}>&times;</CrossIcon>
                <ProductDescription>
                        <ProductTitle>{title}</ProductTitle>
                        <ProductPrice>{currency}{price}</ProductPrice>
                </ProductDescription>
            </ProductDescriptionContainer>
            <ProductQuantity>Qty {quantity}</ProductQuantity>
        </CartPopoverItemContainer>
    )
}

export default CartPopoverItem;