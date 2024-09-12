import Nav from './Nav'
import headerLogo from '../icons_assets/Logo.svg'

const Header = () => {
    return (
        <header>
            <img src={headerLogo} alt="Little Lemon Logo" />
            <Nav />
        </header>
    );
}


export default Header;
