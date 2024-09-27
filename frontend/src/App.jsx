import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from "./components/EmployeeComponent"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* http://localhost:3000 */}
          <Route path = '/' element = {<ListEmployeeComponent />}/>

          {/* http://localhost:3000/employees */}
          <Route path = '/employees' element = {<ListEmployeeComponent />} />
          
          <Route path = '/add-Employee' element = {<EmployeeComponent />}/>

          <Route path = '/edit-employee/:id' element = {<EmployeeComponent />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
