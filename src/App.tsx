import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header, Footer } from './components/Layout';
import Home from './pages/Home';
import DebrisRemoval from './pages/DebrisRemoval';
import GreaseTrap from './pages/GreaseTrap';
import PastPerformance from './pages/PastPerformance';
import Industries from './pages/Industries';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/debris-removal" element={<DebrisRemoval />} />
            <Route path="/services/grease-trap" element={<GreaseTrap />} />
            <Route path="/projects" element={<PastPerformance />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
