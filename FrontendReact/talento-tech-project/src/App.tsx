import { BrowserRouter, Route, Routes } from "react-router-dom"
import Welcome from "./pages/Welcome/Welcome"
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Welcome /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
