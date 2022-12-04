import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Components/header'
import 'bootstrap/dist/css/bootstrap.css';
import './Components/header.css'
import Accueil from './Components/accueil';
import './Components/accueil.css';
import Apropos from './Components/apropos';
import Services from './Components/service';
import './Components/services.css'
import Realisation from './Components/realisation';
import './Components/realisation.css'
import Cours from './Components/cours';
import './Components/cours.css'
import Footer from './Components/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Header />
    <Accueil />
    <Apropos/>
    <Services/>
    <Realisation />
    <Cours />
    <Footer/>
  </React.Fragment>
);

reportWebVitals();
