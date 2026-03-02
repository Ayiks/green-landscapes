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
  const { pathname } = useLocation();

  React.useEffect(() => {
    // Wrap in a setTimeout to push the scroll to the end of the execution queue.
    // This ensures the new page DOM has fully painted on mobile before scrolling.
    const timeoutId = setTimeout(() => {
      // 1. Standard window scroll (simpler syntax often works better on mobile)
      window.scrollTo(0, 0);
      
      // 2. Fallbacks for strict mobile browsers (like older iOS Safari)
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0;
    }, 10); // A tiny 10ms delay is imperceptible but fixes the mobile paint issue

    // Cleanup the timeout
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default App;