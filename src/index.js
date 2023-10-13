import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header';
import App from './pages/home';
import About from './pages/about';
import Kickstarter from './pages/kickstarter';
import Who from './pages/who';
import Footer from './components/footer';

// Retrieving the tag to insert the application
const root = ReactDOM.createRoot(document.getElementById('root'));
// Add components to tag
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/about' element={<About />} />
                <Route path='/kickstarter' element={<Kickstarter />} />
                <Route path='/who' element={<Who />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
