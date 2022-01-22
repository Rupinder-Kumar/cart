export const addItemToCart = (cartItems, cartItemToAdd) => {
    console.log('calling')
    const existingCartItem = cartItems.find(cartItem  => cartItem.id === cartItemToAdd.id)

    if(existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id
                 ? { ...cartItem, quantity: cartItem.quantity + 1 }
                 : cartItem
            )
    }
    // added extra code in case we want to extend our app with add to cart functionality
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if(existingCartItem.quantity === 1) {
       return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id 
        ? 
            {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        )

}

export const transformInitialDataForCart = (cartItems) => {
    return cartItems.map(cartItem =>{ 
        return {
            ...cartItem,
            price: Number(cartItem.price),
            quantity: 1
    }}
   )
}