//styles
import './App.css';

//components
import TopMenu from './components/TopMenu';

//pages
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <Home />
    </div>
  );
}

export default App;
