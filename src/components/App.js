import React from 'react';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import Header from './common/Header';
import CoursesPage from './common/CoursesPage';


function App() {

    function getPage(){
        const router = window.location.pathname;
    if(router==="/about") return <AboutPage/>
    if(router==="/courses") return <CoursesPage/>
    else return <HomePage/>
    };

    return (
        <div className="container">
            <Header/>
        {getPage()}
        </div>
        
    );
    
}


export default App;