import React from 'react';
import { BrowserRouter as Router, Routes, Route , useLocation} from 'react-router-dom';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Home from '@pages/Home';
import About from '@pages/About';
import Projects from '@pages/Projects';
import Impact from '@pages/Impact';
import Contact from '@pages/Contact';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop /> {/* Ensure we scroll to top on route change */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

// Helper component to scroll to top when page changes
const ScrollToTop = () => {
  const { pathname } = useLocation(); // You will need to import useLocation
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App;