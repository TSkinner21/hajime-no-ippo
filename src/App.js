import logo from './logo.svg';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Localidades from './pages/localidades/localidades';
import Ingressos from './pages/ingressos/ingressos'
import Galeria from './pages/galeria/galeria';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/localidades' element={<Localidades />}/>
        <Route path='/ingressos' element={<Ingressos />}/>
        <Route path='/galeria' element={<Galeria />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
