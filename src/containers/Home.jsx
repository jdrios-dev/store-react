import React from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters';
import Heros from '../components/Heros';
import Footer from '../components/Footer';
import Carousels from '../components/Carousels';
import '../assets/styles/App.scss';

const Home = () => (
  <div className='App'>
    <Header />
    <Filters />
    <Heros />
    <Carousels />
    <Footer />
  </div>
);

export default Home;
