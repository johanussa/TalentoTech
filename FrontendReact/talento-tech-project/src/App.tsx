import { BrowserRouter, Route, Routes } from "react-router-dom"
import Welcome from "./pages/Welcome/Welcome"
import Login from './pages/Login/Login';
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Welcome /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
