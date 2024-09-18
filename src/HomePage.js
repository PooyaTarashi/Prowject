import Hero from './components/Hero'
import OurStory from './components/OurStory';
import Specials from './components/Specials'
import Testimonials from './components/Testimonials'

const HomePage = () => {
    return (
        <div>
            <br/>
            <br/>

            <Hero />
            <Specials />

            <Testimonials />

            <OurStory />
        </div>
    );
}

export default HomePage;