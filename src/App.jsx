import { Outlet } from "react-router-dom"
// axios
import axios from "axios"

// COMPONENT
import NavBarComponent from "./components/NavBarComponent"

//axios
axios.defaults.baseURL = 'https://dummyjson.com'

function App() {
 

  return (
    <div >
      <NavBarComponent />
      <Outlet />
      
    </div>
  )
}

export default App
