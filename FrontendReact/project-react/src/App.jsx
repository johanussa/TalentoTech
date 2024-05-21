import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ComponentHeader from './components/Header'
import ComponentImages from './components/Images'
import ComponentInput from './components/Input'
import Practice from './components/Practice'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <Router>
      <Navbar />
      <ComponentHeader />        
      <Routes>
        <Route path='/input' element={<ComponentInput />} />
        <Route path='/images' element={<ComponentImages />} />
        <Route path='/' element={<Practice />} />
      </Routes>
    </Router>
  )
}

export default App
