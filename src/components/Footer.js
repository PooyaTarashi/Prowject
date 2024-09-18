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
            <li><a href='#home' aria-label='Navigate to home'>Home</a></li>
            <li><a href='#about' aria-label='Navigate to about'>About</a></li>
            <li><a href='#menu' aria-label='Navigate to menu'>Menu</a></li>
            <li><a href='#reservations' aria-label='Navigate to reservation'>Reservations</a></li>
            <li><a href='#order-online' aria-label='Navigate to order'>Order Online</a></li>
            <li><a href='#login' aria-label='Navigate to login'>Login</a></li>
          </ul>
        </div>
        
        <div className='footer-container'>
          <h3>
            Contact
          </h3>
          <ul>
            <li><a href='#address' aria-label='Address'>Address</a></li>
            <li><a href='#phone-number' aria-label='Phone number'>phone number</a></li>
            <li><a href='#email' aria-label='Email Address'>email</a></li>
          </ul>
        </div>

        <div className='footer-container'>
          <h3>
            Social Media Links
          </h3>
          <ul>
            <li><a href='#address' aria-label='Address'>Address</a></li>
            <li><a href='#phone-number' aria-label='Phone number'>phone number</a></li>
            <li><a href='#email' aria-label='Email Address'>email</a></li>
          </ul>
        </div>
      </footer>
    );
}

export default Footer;