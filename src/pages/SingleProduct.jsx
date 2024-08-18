import Rating from '@mui/material/Rating'
import React, { useEffect, useState } from 'react'
//router
import { useParams } from 'react-router-dom'
import ProductsService from '../services/ProductsService'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

function SingleProduct() {
    const [singleProduct, setSingleProduct] = useState({})
    const [isLoding, setIsLoding] = useState(false)
    const [currentImage, setCurrentImage] = useState(0)

    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        ProductsService.getSingleProductService(id)
            .then(res => {
                setSingleProduct(res.data)
                setIsLoding(true)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='px-[20px]'>
            {isLoding ? <div className='container mx-auto flex flex-col lg:flex-row gap-[40px] lg:gap-[20px]'>
                {/* left side */}
                <div className='w-full lg:w-[50%] '>
                    <img src={singleProduct.images[currentImage]} alt={singleProduct.title} className='w-full h-[400px] object-contain' />
                    <div className='flex items-center justify-center gap-[20px] mt-[20px]'>
                        {singleProduct.images.map((el, index) => {
                            return <img key={index} src={el} alt={singleProduct.title} className='w-[170px] h-[170px] object-cover border border-textColor px-[5px] rounded-[20px]'
                                onClick={() => setCurrentImage(index)} />
                        })}
                    </div>
                </div>

                {/* right side */}
                <div className='w-full lg:w-[50%] flex flex-col gap-[10px]'>
                    <h1 className='text-[30px] font-bold text-mainBlue'>{singleProduct.title}</h1>
                    <p className='text-[20px] font-bold text-mainYellow'>${singleProduct.price}</p>
                    <p className='text-[20px] text-textColor'>{singleProduct.description}</p>
                    <Rating name="read-only" value={singleProduct.rating} readOnly />
                    {singleProduct.stock > 0 ? <p className='text-[20px] fotn-bold text-green-500'>In Stock</p> : <p className='text-[20px] fotn-bold text-red-500'>Out of Stock</p>}
                    <div className='flex gap-[20px]'>
                        <button className='bg-mainYellow px-[20px] py-[10px] rounded-[15px] text-whiteColor hover:bg-mainBlue duration-500 cursor-pointer mt-[10px]'
                        onClick={() => dispatch(addToCart(singleProduct))}
                        >Add to Cart</button>
                        <button className='bg-mainBlue px-[20px] py-[10px] rounded-[15px] text-whiteColor hover:bg-mainYellow duration-500 cursor-pointer mt-[10px]'>Favorite</button>
                    </div>
                </div>
            </div> : <h1>Loading</h1>}
        </div>
    )
}

export default SingleProduct
