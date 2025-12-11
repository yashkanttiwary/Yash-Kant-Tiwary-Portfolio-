import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { Closing } from './components/Closing';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <About />
        <Portfolio />
        <Skills />
      </main>
      <Footer />
      <Closing />
    </div>
  );
}

export default App;