import Home from './Pages/Home';
import React,{useState,useEffect} from 'react';
import './Styles/Home.css';

function App() {
  const [showButton, setShowButton] = useState(false);

  // Manejar el evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para volver al inicio
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
    <Home />
    {showButton && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        ↑
      </button>
    )}
  </div>

  );
}

export default App;