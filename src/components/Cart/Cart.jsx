import PropTypes from 'prop-types';
import { useEffect, useId, useState, useRef } from 'react';
import { useCart } from '@/hooks/useCart';
import { CartIcon, ClearCartIcon } from '@/components/Icons/Icons';
import './Cart.css';

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
    const sidebarRef            = useRef();
    const [ isOpen, setIsOpen ] = useState(false);
    const { cart, clearCart, addToCart, deleteToCart, removeToCart } = useCart();

    useEffect(() => {
        const handler = (e) => {
            if (!sidebarRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handler);
    }, [ isOpen ]);

    return (
        <>
            <label className = 'cart-button' htmlFor = { cartCheckboxId }>
                <button id = 'cart-button' onClick = { () => setIsOpen(!isOpen) }>
                    <CartIcon />
                </button>
            </label>
            <input id = { cartCheckboxId } type = 'checkbox' hidden/>

            <aside id = 'sidebar-cart' ref = { sidebarRef } className = { `cart ${ isOpen ? 'active' : '' }` }>
                <ul className = 'cart__products'>
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

                <div className = 'cart__summary'>
                    <button onClick = { clearCart }>
                        <ClearCartIcon />
                    </button>
                    <div className = 'summary__'>
                        <strong>Total: </strong>
                        <span>${ cart.reduce( (acc, product) => acc + product.price * product.quantity, 0 ) }</span>
                    </div>
                </div>
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