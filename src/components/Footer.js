import footerLogo from '../icons_assets/footer-logo.2c859235d6c57bb54176.jpg'

const Footer = () => {
    return (
      <footer>
        <img id="footer-logo" height={150} src={footerLogo} alt="Little Lemon Logo"/>

        <div className='footer-container'>
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
        
        <div className='footer-container'>
          <h3>
            Contact
          </h3>
          <ul>
            <li><a href='#address'>Address</a></li>
            <li><a href='#phone-number'>phone number</a></li>
            <li><a href='#email'>email</a></li>
          </ul>
        </div>

        <div className='footer-container'>
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