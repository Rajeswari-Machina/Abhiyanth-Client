import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Stalls from './pages/Stalls';
//import ResponsiveAppBar from './components/Navbar';
import NavBarLayout from './components/NavBarLayout';
import EventCalendar from './components/EventCalendar';
import Admin from './pages/Admin';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/stalls" element={<Stalls />} />
          <Route path="/event-calendar" element={<EventCalendar />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
