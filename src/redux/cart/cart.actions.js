import axios from "axios";
import CartActionTypes from "./cart.types";
import { transformInitialDataForCart } from "./cart.utils";
import { cart } from "../../apiMappings"

export const fetchCartItems = () => ({
    type: CartActionTypes.FETCH_CART_ITEMS
})

export const fetchCartItemsSuccess = items => ({
    type: CartActionTypes.FETCH_CART_ITEMS_SUCCESS,
    payload: items
});

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const fetchCartItemsAsync = () => dispatch => {
    dispatch(fetchCartItems());
    axios.get(cart.items).then(resp => {
        dispatch(fetchCartItemsSuccess(transformInitialDataForCart(resp.data.products)))
    }).catch(error => console.log(error.message))
}