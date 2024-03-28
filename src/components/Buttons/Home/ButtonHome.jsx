import { Link } from 'react-router-dom';
import './ButtonHome.css';

const ButtonHome = () => {

    return (
        <div className = 'button__home'>
            <Link to = "/home">Ir a Inicio</Link>
        </div>
    );
}

export default ButtonHome