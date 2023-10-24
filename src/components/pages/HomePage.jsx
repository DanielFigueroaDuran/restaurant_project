import Abaut from '../landingpage/Abaut';
import Contact from '../landingpage/Contact';
import Footer from '../landingpage/Footer';
import Header from '../landingpage/Header';
import Home from '../landingpage/Home';
import Menu from '../landingpage/Menu';
import NavIcon from '../landingpage/NavIcon';

const HomePage = () => {
    return (
        <div className='font-poppins bg-back'>
            <Header />
            <NavIcon />
            <Home />
            <Abaut />
            <Menu />
            <Contact />
            {/* food ladind page de pinterest 
            fuentes prezi raleway es buena
            */}

            {/*
      
      <Footer/> */}
        </div>
    )
}

export default HomePage