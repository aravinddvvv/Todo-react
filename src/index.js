import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    
    <App />
    <Footer/>
   
  </React.StrictMode>
);

