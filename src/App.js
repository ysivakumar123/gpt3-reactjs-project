import './App.css';
import { Navbar, Brand, Cta } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <div className='gradient__bg_links'>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
