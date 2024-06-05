import './App.css';
import { Route, Routes } from 'react-router-dom';

//Import Components
import Home from '../src/pages/Home';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App