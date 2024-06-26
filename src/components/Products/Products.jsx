import { AddToCartIcon } from '@/components/Icons/Icons';
import { useCart } from '@/hooks/useCart';
import PropTypes from 'prop-types';
import './Products.css';

export const Products = ({ products }) => {

    const { addToCart } = useCart();
    
    return (
        <main className = 'products'>
            <ul>
                {
                    products.map( product => (
                        <li key = { product.id }>
                            <img 
                                src = { product.thumbnail }
                                alt = { product.title }
                            />
                            <div>
                                <strong>{ product.title } - ${ product.price }</strong>
                            </div>
                            <div>
                                <button onClick = { () => addToCart(product) }>
                                    <AddToCartIcon />
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </main>
    );
}

Products.propTypes = {
    products : PropTypes.array.isRequired,
};
