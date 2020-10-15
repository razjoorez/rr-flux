import React from 'react';
import AboutPage from './AboutPage';
import HomePage from './HomePage'


function App() {
    const router = window.location.pathname;
    if(router==="/about") return <AboutPage/>
    else return <HomePage/>
}


export default App;