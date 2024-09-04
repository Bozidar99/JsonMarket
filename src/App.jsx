import { Outlet } from "react-router-dom"
// axios
import axios from "axios"

// COMPONENT
import NavBarComponent from "./components/NavBarComponent"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "./store/cartSlice"

//axios
axios.defaults.baseURL = 'https://dummyjson.com'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart_item')) || [];
    if (cartItems && Array.isArray(cartItems)) {
      cartItems.forEach((item) => {
        dispatch(addToCart(item));
      });
    }
  }, [])
  return (

    <div >
      <NavBarComponent />
      <Outlet />

    </div>
  )
}

export default App
