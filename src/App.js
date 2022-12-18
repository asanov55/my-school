import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Gallery } from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import { Lizenzia } from './components/Lizenzia/Lizenzia';
import Main from './components/Main/Main';
import { Navigation } from './components/Navigation/Navigation';
import { Zakony } from './components/Zakony/Zakony';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/accreditation" element={<Lizenzia />} />
        <Route path="/legal-framework" element={<Zakony />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
