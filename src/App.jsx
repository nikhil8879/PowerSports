
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './components/Login/Login'
import RegisterForm from './components/Registration/Register'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element={<LoginForm/>}></Route>
      <Route path = 'register' element={<RegisterForm/>}></Route>
      <Route path='forgot' element={<ForgotPassword/>}></Route>
      
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
