import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Page/Home';
import Create from './Page/Create';
import Update from './Page/Update';
import More from './Page/More';

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />}d></Route>
       <Route path="/create" element={<Create />}/>
       <Route path="/update/:id" element={<Update />}/>
       <Route path="/more/:id" element={<More />}/>
     </Routes>
    </BrowserRouter>
    
  );
}

export default App;