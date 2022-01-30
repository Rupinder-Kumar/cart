import React from "react";
import { CartItemContainer, ProductContainer, ProductDescritionContainer, ProductName, ProductDescription, ProductQuantityContainer, IncrementDecrementIcon, ProductQuantity, ProductPrice } from "./CartItemStyledComponents";
import { ReactComponent as ProductIcon } from "../../assets/icons/product.svg"
import { addItem, removeItem } from "../../redux/cart/cart.actions";
import { useDispatch} from "react-redux";

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const {currency, desc, price, quantity, title} = cartItem;
    return (
    <CartItemContainer>
        <ProductContainer>
            <ProductIcon height="50px" />
            
            <ProductDescritionContainer>
              <ProductName>{title}</ProductName>
                <ProductDescription>{desc}</ProductDescription>
            </ProductDescritionContainer>

        </ProductContainer>

       
        <ProductQuantityContainer>
                <IncrementDecrementIcon onClick={() => dispatch(removeItem(cartItem))}>-</IncrementDecrementIcon>
                <ProductQuantity>{quantity}</ProductQuantity>
                <IncrementDecrementIcon onClick={() => dispatch(addItem(cartItem))}>+</IncrementDecrementIcon>
        </ProductQuantityContainer>

        <ProductPrice>{currency}{price}</ProductPrice>
       
    </CartItemContainer>
)};

export default CartItem;