import logo from '../../images/zwigato.png';
import cart from '../../images/cart-shopping.png';
import search from '../../images/search.png';
import { useState } from 'react';

const Header = () => {
    const [btnName, setBtnName] = useState('Login');

    console.log('Header rendered');
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logo} width={120} height={50} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>
                        <img src={cart} width={20} height={20} />
                    </li>
                    <li>
                        <button
                            className='login'
                            onClick={() => {
                                btnName === 'Login'
                                    ? setBtnName('Logout')
                                    : setBtnName('Login');
                                console.log(btnName);
                            }}>
                            {btnName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
