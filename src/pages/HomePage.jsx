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

  const { allProducts, productLoader, selectCatregory, searchProducts } = useSelector((state) => state.productStore)

  const dispatch = useDispatch()

  useEffect(() => {
    if (selectCatregory) {
      ProductsService.getAllProductByCategoryService(selectCatregory)
        .then(res => dispatch(saveAllProductsAction(res.data.products)))
        .catch(err => console.log(err))
    } else {
      ProductsService.getAllProductsService()
        .then(res => dispatch(saveAllProductsAction(res.data.products)))
        .catch(err => console.log(err))
    }
  }, [selectCatregory])

  useEffect(() => {
    ProductsService.getProductsBySearch(searchProducts)
      .then(res => dispatch(saveAllProductsAction(res.data.products)))
      .catch(err => console.log(err))
  }, [searchProducts])
  return (

    <div>
      < div className='flex items-center justify-end gap-[20px] py-[20px] px-[20px] container mx-auto'>
        <CiGrid41 size={35} onClick={() => setIsGrid('gridView')} className={isGrid === 'gridView' ? 'bg-mainYellow rounded-[10px]' : ''}/> 
        <CiCircleList size={35} onClick={() => setIsGrid('listView')} className={isGrid === 'listView' ? 'bg-mainYellow rounded-[10px]' : ''}/>
      </div >
      <div className={isGrid === 'gridView' ? 'flex flex-wrap items-center justify-center mt-[50px] gap-[20px] container mx-auto' : 'flex flex-col items-center justify-center mt-[50px] gap-[20px] container mx-auto'}>
        {productLoader ? allProducts.map((product) => {
          return <CardProductComponent key={product.id} product={product} isGrid={isGrid} setIsGrid={setIsGrid}/>
        }) : <LoadingComponent size={50} />}
      </div>

    </div>
  )
}
// JSON MARKET
export default HomePage
  