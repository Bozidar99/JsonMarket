import Rating from '@mui/material/Rating'
import { Link } from 'react-router-dom'

function CardProductComponent({ product, isGrid }) {
  return (
    <div className={isGrid === 'gridView' ? 'border border-textColor rounded-[20px] flex flex-col items-center justify-center py-[20px]'
      : 'w-full flex items-center border border-textColor justify-center rounded-lg py-[40px] px-[40px] justify-between'
    }>
      <div className='w-[300px]'>
        <img src={product.thumbnail} alt='' className='w-full h-[300px] object-cover' />
      </div>
      <h3 className='text-mainBlue font-bold'>{product.title}</h3>
      <h4 className='text-mainBlue font-bold'>${product.price}</h4>
      <Rating name="read-only" value={product.rating} readOnly />
      <Link to={`/singleProduct/${product.id}`} className='bg-mainYellow px-[20px] py-[10px] rounded-[15px] text-whiteColor hover:bg-mainBlue duration-500 cursor-pointer mt-[10px]'>View Details</Link>
    </div >

  )
}

export default CardProductComponent
