import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Gallery } from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import { Lizenzia } from './components/Lizenzia/Lizenzia';
import Main from './components/Main/Main';
import { Navigation } from './components/Navigation/Navigation';
import Parents from './components/Parents/Parents';
import { TimeTable } from './components/TimeTable/TimeTable';
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
        <Route path="/about-us" element={<About />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/for-parents" element={<Parents />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
