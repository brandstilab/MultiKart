import React, { useReducer, useState } from 'react'
import CreateCartContext from '.'
import { CartReducer } from '../../Utils/AllReducers'

const CartProvider = (props) => {
    const [state, dispatch] = useReducer(CartReducer, { products: {} })
    const [cartData, setCartData] = useState([])
    const [cartState, setCartState] = useState([])
    const handleAddToCart = (qty, productObj) => {
        const cart = [...cartState]
        const index = cart.findIndex((item) => item.product_id === productObj?.id);
        if (index === -1) {
            const obj = {
                id: "",
                consumer_id: "",
                product_id: productObj?.id,
                product: productObj,
                quantity: qty,
                sub_total: productObj?.sale_price,
            }
            setCartState((prev) => [...prev, obj])
        } else {
            cart[index].quantity = cart[index]?.quantity + qty
            setCartState([...cart])
        }
    }
    return (
        <CreateCartContext.Provider value={{
            ...props, state, dispatch, cartData, setCartData, handleAddToCart, cartState, setCartState
        }}>
            {props.children}
        </CreateCartContext.Provider>
    )
}

export default CartProvider