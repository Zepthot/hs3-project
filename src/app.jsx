// import libraries
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import components
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import Kickstarter from './pages/kickstarter';
import Whoweare from './pages/whoweare';
import Footer from './components/footer';

// App function with routes, components and state language
function App () {

    const [isEnglish, setEnglish] = useState('en');

    const changeLanguage = () => {
        setEnglish(isEnglish === 'en' ? 'fr' : 'en');
    };

    return (
        <BrowserRouter>
            <Header isEnglish={isEnglish} setEnglish={changeLanguage} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About isEnglish={isEnglish} />} />
                <Route path='/kickstarter' element={<Kickstarter isEnglish={isEnglish} />} />
                <Route path='/whoweare' element={<Whoweare isEnglish={isEnglish} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
// Export to call it up in index.js
export default App;
