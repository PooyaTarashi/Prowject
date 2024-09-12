import footerLogo from '../icons_assets/Logo.svg'

const Footer = () => {
    return (
        <footer>
        <img src={footerLogo} alt="Little Lemon Logo"/>

        <div>
          <h3>
            Doormat Navigation
          </h3>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#menu'>Menu</a></li>
            <li><a href='#reservations'>Reservations</a></li>
            <li><a href='#order-online'>Order Online</a></li>
            <li><a href='#login'>Login</a></li>
          </ul>
        </div>
        
        <div>
          <h3>
            Contact
          </h3>
          <ul>
            <li><a href='#address'>Address</a></li>
            <li><a href='#phone-number'>phone number</a></li>
            <li><a href='#email'>email</a></li>
          </ul>
        </div>

        <div>
          <h3>
            Social Media Links
          </h3>
          <ul>
            <li><a href='#address'>Address</a></li>
            <li><a href='#phone-number'>phone number</a></li>
            <li><a href='#email'>email</a></li>
          </ul>
        </div>
      </footer>
    );
}

export default Footer;