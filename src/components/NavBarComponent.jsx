import { useEffect, useState } from "react"
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
    const [totalProductLS, setTotalProductLS] = useState(0)
    const [totalFavoriteLS, setTotalFavoriteLS] = useState(0)
    //let totalProduct = JSON.parse(localStorage.getItem('cart_total'))
    const {totalProduct} = useSelector((state) => state.cartStore)
    const {totalFavorite} = useSelector((state) => state.favoriteStore)

    useEffect(() => {
        let isTotal = JSON.parse(localStorage.getItem('cart_total'))
        if(totalProduct){
            setTotalProductLS(isTotal)
        }else{
            setTotalProductLS(0)
        }
        
    }, [totalProduct])
    useEffect(() => {
        let isTotal = JSON.parse(localStorage.getItem('favorite_total'))
        if(totalProduct){
            setTotalFavoriteLS(isTotal)
        }else{
            setTotalFavoriteLS(0)
        }
    })

   
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
                            <span  className="bg-mainYellow rounded-full text-whiteColor w-[20px] h-[20px] flex items-center justify-center">{totalFavorite}</span>
                            <Link to ={'/favorite'} className="text-whiteColor">Favorites</Link>
                        </div>

                        <div className="flex items-center gap-[5px]">
                            {/*icon*/}
                            <CiShoppingCart size={28} color="white" />
                            {/*text */}
                            <span className="bg-mainYellow rounded-full text-whiteColor w-[20px] h-[20px] flex items-center justify-center">{totalProductLS}</span>
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
