import react, {useEffect} from 'react';
import Main from '../pages/Main';
import Services from '../pages/Services';
import Design from '../pages/Design';
import StudioServices from '../pages/StudioServices';
import Facts from '../pages/Facts';
import InteriorDesign from '../pages/InteriorDesign';
import Testimony from '../pages/Testimony';
import Footer from '../pages/Footer';

//Styles
import GlobalStyle from '../styles/GlobalStyles';

//Components
import Nav from './Nav';

//Framer motion
import {useAnimation, motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

//Animations
import {titleAnim} from './animation';



const App = () =>{
    return(
        <div className="App">
        <GlobalStyle/>
        <Nav/>
        <Main/>
        <Services/>
        <Design/>
        <StudioServices/>
        <Facts/>
        <InteriorDesign/>
        <Testimony/>
        <Footer/>
        </div>
    )
}

export default App;