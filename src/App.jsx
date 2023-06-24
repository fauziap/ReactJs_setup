import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Index from './pages/Index'
import './index.css';
import NotFound from "./pages/NotFound";

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/lala' element={<Index />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
