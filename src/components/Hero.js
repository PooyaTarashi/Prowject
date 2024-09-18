import { useNavigate } from 'react-router-dom';
import heroImage from '../icons_assets/restaurant chef B.jpg'

const Hero = () => {
    const heroStyles = {
        backgroundColor: "#495e57",
    };

    const h1Style = {
        color: '#f4ce14',
        // fontFamily: 'Markazi Text'
    }

    const navigate = useNavigate();

    const handleBtn = () => {
        navigate('/reservations');
    }

    return (
        <div style={{ ...heroStyles, display: 'flex', justifyContent: 'space-between', gap: '50px', padding:'50px' }}>
            <div >
                <h1 style={h1Style}>Little Lemon</h1>
                <h2 style={{ color: '#fff' }}>Chicago</h2>
                <p style={{ color: '#fff' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed ligula nisl. Nunc ac cursus tellus. Duis at maximus risus. Maecenas quis ante quis metus accumsan convallis quis a quam. Integer in dignissim massa. Praesent et posuere ex, id dapibus lorem. Maecenas sagittis pellentesque elementum. Ut egestas nec nisl sed rutrum.</p>
                <button onClick={ handleBtn } id="reserve-btn">Reserve a table</button>
            </div>

            <img src={ heroImage } style={{ borderRadius: '16px' }} alt="Little Lemon Logo" height={300} />
        </div>
    );
}

export default Hero;