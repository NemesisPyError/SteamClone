import logo from './logo.svg';
import './componentes/navbar.css';
import SiteNavigation from './componentes/navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaDeseados from './componentes/ListaDeseados.js';
import Discusiones from './componentes/comunidad.jsx'; // OK

function App() {
  return (
    <Router>
      <div className="App">
        <SiteNavigation />
        <Routes>
          <Route path="/deseados" element={<ListaDeseados />} />
          <Route path="/comunidad" element={<Discusiones />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
