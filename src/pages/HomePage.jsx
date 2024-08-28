import React, { useEffect, useState } from 'react'
// SERVICES
import ProductsService from '../services/ProductsService'
// REDUX
import { useDispatch, useSelector } from 'react-redux'
import { saveAllProductsAction } from '../store/productSlice'
// COMPONENTS
import CardProductComponent from '../components/CardProductComponent'
import LoadingComponent from '../components/LoadingComponent'
// ICON
import { CiGrid41, CiCircleList } from "react-icons/ci";


function HomePage() {

  const [isGrid, setIsGrid] = useState('gridView')
  const [limitProducts, setLimitProducts] = useState(10)

  const { allProducts, productLoader, selectCatregory, searchProducts } = useSelector((state) => state.productStore)

  const dispatch = useDispatch()

  useEffect(() => {
    if (searchProducts) {
      ProductsService.getProductsBySearch(searchProducts)
        .then(res => dispatch(saveAllProductsAction(res.data.products)))
        .catch(err => console.log(err))
    }
  }, [searchProducts])

  useEffect(() => {
    if (selectCatregory) {
      ProductsService.getAllProductByCategoryService(selectCatregory)
        .then(res => dispatch(saveAllProductsAction(res.data.products)))
        .catch(err => console.log(err))
    } else {
      ProductsService.getAllProductsService(limitProducts)
        .then(res => dispatch(saveAllProductsAction(res.data.products)))
        .catch(err => console.log(err))
    }
  }, [selectCatregory, limitProducts])

  return (

    <div>
      < div className='flex items-center justify-end gap-[20px] py-[20px] px-[20px] container mx-auto'>
        <CiGrid41 size={35} onClick={() => setIsGrid('gridView')} className={isGrid === 'gridView' ? 'bg-mainYellow rounded-[10px]' : ''} />
        <CiCircleList size={35} onClick={() => setIsGrid('listView')} className={isGrid === 'listView' ? 'bg-mainYellow rounded-[10px]' : ''} />
      </div >
      <div className={isGrid === 'gridView' ? 'flex flex-wrap items-center justify-center mt-[50px] gap-[20px] container mx-auto' : 'flex flex-col items-center justify-center mt-[50px] gap-[20px] container mx-auto'}>
        {productLoader ? allProducts.map((product) => {
          return <CardProductComponent key={product.id} product={product} isGrid={isGrid} setIsGrid={setIsGrid} />
        }) : <LoadingComponent size={50} />}
      </div>

      {!selectCatregory &&
        <div className='container mx-auto px-[20px] py-[20px] flex items-center justify-center'>
          <button className='w-[250] bg-mainBlue text-whiteColor text-center rounded-[10px] p-[8px] hover:bg-mainYellow cursor-pointer duration-300'
            onClick={() => setLimitProducts(limitProducts + 20)}
          >View more products</button>
        </div>
      }


    </div>
  )
}
// JSON MARKET
export default HomePage
