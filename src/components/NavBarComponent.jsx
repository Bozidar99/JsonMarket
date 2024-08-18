import { useState } from "react"
// COMPONENT
import HeaderComponent from "./HeaderComponent"
import CategoryComponent from "./CategoryComponent";
import SearchComponent from "./SearchComponent";


// ICONS
import { CiUser, CiShoppingCart } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";

// IMAGES
import logo from '../assets/logo.png'
//Clerk
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";




function NavBarComponent() {
    const [toggleHeader, setToggleHeader] = useState(true)
    const {totalProduct} = useSelector((state) => state.cartStore)
    return (
        <div >
            {toggleHeader && <HeaderComponent setToggleHeader={setToggleHeader} />}

            {/*Main Nav */}
            <div className="bg-mainBlue h-full py-[10px] lg:h-[100px]">
                <div className="container mx-auto flex items-center justify-between h-full flex-col lg:flex-row gap-[15px]">
                    <Link to='/'>
                        <img src={logo} alt="logo" />
                    </Link>

                    {/*Search Component*/}

                    <SearchComponent />

                    {/*Login/Cart/Favorites*/}
                    <div className="flex items-center gap-[15px] ">
                        <div className="flex items-center gap-[5px]">
                            {/*icon*/}
                            <CiUser size={28} color="white" />
                            {/*text */}
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton showName />
                            </SignedIn>
                        </div>

                        <div className="flex items-center gap-[5px]">
                            {/*icon*/}
                            <GrFavorite size={28} color="white" />
                            {/*text */}
                            <span className="bg-mainYellow rounded-full text-whiteColor w-[20px] h-[20px] flex items-center justify-center">0</span>
                            <span className="text-whiteColor">Favorites</span>
                        </div>

                        <div className="flex items-center gap-[5px]">
                            {/*icon*/}
                            <CiShoppingCart size={28} color="white" />
                            {/*text */}
                            <span className="bg-mainYellow rounded-full text-whiteColor w-[20px] h-[20px] flex items-center justify-center">{totalProduct}</span>
                            <Link to={'/cart'} className="text-whiteColor">Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
            <CategoryComponent />
        </div>
    )
}

export default NavBarComponent
