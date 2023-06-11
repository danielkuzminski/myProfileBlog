//styles
import './App.css';

//components
import TopMenu from './components/TopMenu';
import Header from './components/Header';

//pages
import Home from './pages/home/Home';
import AboutReact from './pages/aboutReact/AboutReact';
import AboutFirebase from './pages/aboutFirebase/AboutFirebase';
import AboutWeb from './pages/aboutWeb/AboutWeb'
import Login from './pages/login/Login';

//router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopMenu />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/react' element={<AboutReact />} />
          <Route path='/firebase' element={<AboutFirebase />} />
          <Route path='/web-dev' element={<AboutWeb />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
