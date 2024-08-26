import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { saveSearchProductAction } from '../store/productSlice';

function SearchComponent() {
    const [searchProducts, setSearchProducts] = useState('')

    const dispatch = useDispatch()

    function hendleSearchProducts() {
        dispatch(saveSearchProductAction(searchProducts))
        setSearchProducts('')
        
    }
    return (
        <div className="bg-white rounded-[20px]">
            <input type="text" placeholder="Serach any things" className="px-[27px] py-[17px] outline-none rounded-[20px] placeholder:textColor" 
            value={searchProducts}
            onChange={(e) => setSearchProducts(e.target.value)}
            />
            <button className="bg-mainYellow rounded-[20px] h-[60px] w-[100px] text-white"
            onClick={hendleSearchProducts}
            >Search</button>
        </div>
    )
}

export default SearchComponent
