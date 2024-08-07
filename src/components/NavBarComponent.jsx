import { useState } from "react"
// COMPONENT
import HeaderCompnent from "./HeaderCompnent"


function NavBarComponent() {
    const [toggleHeader, setToggleHeader] = useState(true)
  return (
    <div>
      {toggleHeader && <HeaderCompnent setToggleHeader={setToggleHeader}/>}
      <h3>NavBarComponent</h3>
    </div>
  )
}

export default NavBarComponent
