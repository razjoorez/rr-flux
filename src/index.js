// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {render} from 'react-dom';
// import HomePage from './components/HomePage';
// import AboutPage from './components/AboutPage';
import App from './components/App';

render(<App/>, document.getElementById('root'));


