import React from 'react'

function SearchComponent() {
    return (
        <div className="bg-white rounded-[20px]">
            <input type="text" placeholder="Serach any things" className="px-[27px] py-[17px] outline-none rounded-[20px] placeholder:textColor" />
            <button className="bg-mainYellow rounded-[20px] h-[60px] w-[100px] text-white">Search</button>
        </div>
    )
}

export default SearchComponent
