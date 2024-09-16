import Nav from './Nav'
import headerLogo from '../icons_assets/Logo.svg'

const Header = () => {
    return (
        <header>
            <a href='http://localhost:3000/'><img src={headerLogo} alt="Little Lemon Logo" id="header-logo" /></a>
            <Nav />
        </header>
    );
}


export default Header;
