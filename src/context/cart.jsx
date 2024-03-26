import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// 1. Create a context for the filter state
export const CartContext = createContext();

// 2. Create a provider component to provide the context
export function CartProvider({ children }) {
    const [ cart, setCart ] = useState([]);
    
    const addToCart = product => {
        // Check if the product is already in the cart
        const productInCartIndex = cart.findIndex(item => item.id === product.id);
        const newCart            = structuredClone(cart);

        if (productInCartIndex >= 0) {
            newCart[ productInCartIndex ].quantity += 1;
            return setCart(newCart);
        }
        
        // if the product don't exist in the cart
        setCart( prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]));
    }

    const deleteToCart = product => {
        // Check if the product is already in the cart
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        const newCart            = structuredClone(cart);

        if (productInCartIndex >= 0 && newCart[ productInCartIndex ].quantity > 1) {
            newCart[ productInCartIndex ].quantity -= 1;
            return setCart(newCart);
        }

        // if the quantity is 1, remove the product from the cart
        newCart.splice(productInCartIndex, 1);
        return setCart(newCart);
    }

    const removeToCart = product => {
        // Check if the product is already in the cart
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        const newCart            = structuredClone(cart);

        // remove the product from the cart
        newCart.splice(productInCartIndex, 1);
        return setCart(newCart);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            deleteToCart,
            removeToCart,
            clearCart
        }}>
            { children }
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node,
};