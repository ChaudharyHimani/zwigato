import logo from '../../images/zwigato.png';
import cart from '../../images/cart-shopping.png';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logo} width={120} height={60} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>
                        <img src={cart} width={20} height={20} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
