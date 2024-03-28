import ButtonLogin from '@/components/Buttons/Login/ButtonLogin';
import ButtonHome from '@/components/Buttons/Home/ButtonHome';
import ContainerGradient from '@components/ContainerGradient/ContainerGradient';
import './Login.css';

const Login = () => {

    return (
        <div className = 'login'>
            <ContainerGradient />
            <div className = 'login__buttons'>
                <ButtonLogin />
                <ButtonHome />
            </div>
        </div>
    );
}

export default Login;