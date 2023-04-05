import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Page/Home';
import Create from './Page/Create';

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/create" element={<Create />}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
