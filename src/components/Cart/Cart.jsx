import PropTypes from 'prop-types';
import { useId, useState } from "react";
import { useCart } from "@/hooks/useCart";
import { CartIcon, ClearCartIcon } from "@/components/Icons/Icons";
import "./Cart.css";

const CartItem = ({ thumbnail, price, title, quantity, addToCart, deleteToCart, removeToCart }) => {
    return (
        <li>
            <img
                src = { thumbnail }
                alt = { title }
            />
            <div>
                <strong>{ title }</strong> - ${ price }
            </div>
    
            <footer>
                <small>
                    Qty: { quantity }
                </small>
                <button onClick = { addToCart }>➕</button>
                <button onClick = { deleteToCart }>➖</button>
                <button onClick = { removeToCart }>🗑️</button>
            </footer>
        </li>
    )
}

const Cart = () => {
    const cartCheckboxId        = useId();
    const [ isOpen, setIsOpen ] = useState(false);
    const { cart, clearCart, addToCart, deleteToCart, removeToCart } = useCart();

    const handleClick = (e) => {
        setIsOpen(!isOpen);

        // let menuButton  = document.getElementById("cart-button");
        let sidebarCart = document.getElementById("sidebar-cart");


        console.log("sidebarCart.classList", sidebarCart.classList);

        if (!sidebarCart.contains(e.target) ) {
            // menuButton.classList.remove("active");
            sidebarCart.classList.remove("active");
        }
    };

    return (
        <>
            <label className = "cart-button" htmlFor = {  cartCheckboxId }>
                <button id = 'cart-button' onClick = { () => handleClick() }>
                    <CartIcon />
                </button>
            </label>
            <input id = { cartCheckboxId } type = "checkbox" hidden/>

            <aside id = 'sidebar-cart' className = { `cart ${ isOpen ? 'active' : '' }` }>
                <ul>
                    { 
                        cart.map( (product) => (
                            <CartItem
                                key          = { product.id }
                                addToCart    = { () => addToCart(product) }
                                deleteToCart = { () => deleteToCart(product) }
                                removeToCart = { () => removeToCart(product) }
                                { ...product }
                            />
                        ))
                    }
                </ul>

                <button onClick = { clearCart }>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}

CartItem.propTypes = {
    thumbnail    : PropTypes.string.isRequired,
    price        : PropTypes.number.isRequired,
    title        : PropTypes.string.isRequired,
    quantity     : PropTypes.number.isRequired,
    addToCart    : PropTypes.func.isRequired,
    deleteToCart : PropTypes.func.isRequired,
    removeToCart : PropTypes.func.isRequired,
};

export default Cart;