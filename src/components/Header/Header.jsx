import React from "react";
import { HeaderContainer } from "./HeaderStyledComponents"
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import CartPopover from '../CartPopover/CartPopover';
const Header = () => {
    const cartVisible = useSelector(state => state.cart.hidden)
    return(
        <HeaderContainer>
            <Cart/>
            {cartVisible && <CartPopover />}
        </HeaderContainer>
    )
}

export default Header;