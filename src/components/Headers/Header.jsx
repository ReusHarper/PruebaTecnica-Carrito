/* eslint-disable react/prop-types */
import Filters from '@/components/Filters/Filters';
import './Header.css';

const Header = () => {
    return (
        <header className = 'header'>
            <img className = 'header__banner' src = '/Banner.jpg' alt = 'Banner about Ecommerce' />
            <h1 className = 'header__title'>Shopping Cart 🛒</h1>
            <Filters />
        </header>
    )
}

export default Header