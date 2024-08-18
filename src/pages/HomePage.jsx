import React, { useEffect } from 'react'
// SERVICES
import ProductsService from '../services/ProductsService'
// REDUX
import { useDispatch, useSelector } from 'react-redux'
import { saveAllProductsAction } from '../store/productSlice'
// COMPONENTS
import CardProductComponent from '../components/CardProductComponent'

function HomePage() {

  const { allProducts, productLoader } = useSelector((state) => state.productStore)

  const dispatch = useDispatch()

  useEffect(() => {
    ProductsService.getAllProductsService()
      .then(res => dispatch(saveAllProductsAction(res.data.products)))
      .catch(err => console.log(err)
      )
  })
  return (
    <div className='flex flex-wrap items-center justify-center mt-[50px] gap-[20px] container mx-auto'>
      {productLoader ? allProducts.map((product) => {
        return <CardProductComponent key={product.id} product={product}/>
      }) : <h1>Loading</h1>}
      
    </div>
  )
}
// JSON MARKET
export default HomePage
