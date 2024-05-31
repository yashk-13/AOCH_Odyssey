// import './App.css';
// import Header from './components/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Petshop from './components/Petshop';


function App() {
  return (
    <div className="App">
    <BrowserRouter >
     <Routes>
        <Route index path='/' Component={Home}/>
        <Route path='/Petshop' Component={Petshop}/>
        <Route path='/petvet' />
        <Route path='/petvet' />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
