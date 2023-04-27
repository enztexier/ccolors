import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Copyright from './pages/copyright/Copyright';
import Lost from './pages/lost/Lost';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/copyright" element={<Copyright />} />
        <Route path="*" element={<Lost />} />
      </Routes>

    </div>
  );
}

export default App;
