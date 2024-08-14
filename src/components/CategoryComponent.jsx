import React, { useEffect, useState } from 'react'
// Services(res/req)
import CategoryServices from '../services/CategoryServices'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { saveAllCategoryAction } from '../store/categorySlice'

function CategoryComponent() {

  const [toggleCategory, setToggleCategory] = useState(false)

  const { allCategory, categoryLoader } = useSelector((state) => state.categoryStore)

  const dispatch = useDispatch()

  useEffect(() => {
    CategoryServices.getAllCategoryService()
      .then((res) => dispatch(saveAllCategoryAction(res.data)))
      .catch((err) => console.log(err))

  }, [])

  function hendleToggleCategory() {
    setToggleCategory(!toggleCategory)
  }

  return (
    <div className='bg-lightGrayColor p-[15px]'>
      <div className='container mx-auto flex items-center justify-between gap-[10px] flex-col gap-[20px] lg:flex-row'>
        <button className='bg-mainYellow px-[20px] py-[10px] rounded-[15px] mr-[40px] text-whiteColor'
        onClick = {hendleToggleCategory}
        >
          {toggleCategory ? 'Close Category' : 'Show Category'}
        </button>
        {toggleCategory && <ul className='flex flex-wrap items-center  justify-between gap-[8px] '>
          {categoryLoader ? allCategory.map((cat, index) => {
            return <li key={index} className='w-[250] bg-mainBlue text-whiteColor text-center rounded-[10px] p-[8px] hover:bg-mainYellow cursor-pointer duration-300'>{cat}</li>
          }) : <h2>Loading...</h2>}
        </ul>}

      </div>
    </div>
  )
}

export default CategoryComponent

