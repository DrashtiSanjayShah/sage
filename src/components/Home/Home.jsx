import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Intro from '../Intro/Intro';
import Features from '../Features/Features';
import Experience from '../Experience/Experience';
import IncludedNotIncluded from '../IncludedNotIncluded/IncludedNotIncluded';
import Questions from '../Questions/Questions';
import Testimonals from '../Testimonals/Testimonals';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

// make font size big for the faq section! 


const Home = () => {
  return (
    <div>
     <Navbar />
      <Intro />
      <Features />
      <Experience />
      <IncludedNotIncluded />
      <Questions /> 
      <Testimonals /> 
      <Services /> 
      <Footer />
    </div>
  )
}

export default Home
