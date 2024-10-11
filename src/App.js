import './App.css';
import {Routes , Route} from "react-router-dom";
import Header from './Pages/Header';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
