import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import About from './About';
import Services from './Services/Services';
import Contact from './Contact';
import Footer from './Footer';
import Services1 from './Services1/Services1';
import Services2 from './Services2';
import Services3 from './Services3';
import Features from './Features';

// Add these routes inside your Router


function App() {
  return (
    <Router>
      <Routes>
        {/* Home route with Navigation */}
        <Route 
          path="/" 
          element={
            <>
              <Navigation />
              <Home />
              <Footer />
            </>
          } 
        />

        {/* Other routes without Navigation */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services1" element={<Services1 />} />
        <Route path="/services2" element={<Services2 />} />
        <Route path="/services3" element={<Services3 />} />
       <Route path ="/Features" element={<Features/>}/>
      </Routes>
    </Router>
  );
}

export default App;
