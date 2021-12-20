import react from 'react';
import Main from '../pages/Main';
import Services from '../pages/Services';
import Design from '../pages/Design';

import GlobalStyle from '../styles/GlobalStyles';

//Components
import Nav from './Nav';

const App = () =>{
    return(
        <div className="App">
        <GlobalStyle/>
        <Nav/>
        <Main/>
        <Services/>
        <Design/>
        </div>
    )
}

export default App;