import React from 'react'

function CardProductComponent({ product }) {
  return (
    <div className='flex flex-wrap gap-[20px] px-[50px] py-[50px]  '>
      <div className='flex flex-col justify-between items-center p-4 border-2 border-mainBlue m-2 rounded-[10px]'>
        <img src={product.thumbnail} alt='' className='w-[250px] h-[250px]' />
        <h3 className='text-mainBlue font-bold'>{product.title}</h3>
        <p className='text-mainBlue font-bold'>{product.price}$</p>
      </div>
    </div>

  )
}

export default CardProductComponent
