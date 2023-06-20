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
import Signup from './pages/signup/Signup';
import AboutMe from './pages/aboutMe/AboutMe';
import AddPost from './pages/addPost/AddPost';

//router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//hooks
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const {user} = useAuthContext()

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
          <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
          <Route path='/signup' element={user ? <Navigate to='/' /> : <Signup />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/add-post' element={user ? <AddPost /> : <Navigate to='/' />} />
        </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
