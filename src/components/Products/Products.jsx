/* eslint-disable react/prop-types */
import { AddToCartIcon } from '@/components/Icons/Icons'
import { useCart } from '@/hooks/useCart'
import './Products.css'

export const Products = ({ products }) => {
    const { addToCart } = useCart()
    
    return (
        <main className = 'products'>
            <ul>
                {
                    products.slice(0, 50).map( product => (
                        <li key = {product.id}>
                            <img 
                                src = {product.thumbnail}
                                alt = {product.title}
                            />
                            <div>
                                <strong>{product.title} - ${product.price}</strong>
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
    )
}
