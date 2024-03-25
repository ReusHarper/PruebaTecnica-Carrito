/* eslint-disable react/prop-types */
import './Footer.css'
import { useCart } from '@/hooks/useCart'

const Footer = () => {
    const { cart } = useCart()
    
    return (
        <footer className='footer'>
            {
                JSON.stringify(cart, null, 2)
            }
        </footer>
    )
}

export default Footer