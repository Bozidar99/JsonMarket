import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { deleteFromCartAction } from '../store/cartSlice'

function CartPage() {
  const [coupon, setCoupon] = useState('')
  

  let cart = JSON.parse(localStorage.getItem('cart_item')) || []
  //const { cart } = useSelector((state) => state.cartStore);

  const dispatch = useDispatch()

  function handleRemoveProduct(product) {
     dispatch(deleteFromCartAction(product))
  }



  
  

  return (

    <div className='mt-[50px]'>
      <div className='container mx-auto flex flex-col lg:flex-row gap-[20px]'>
        <TableContainer component={Paper} className='w-full lg:w-[70%]'>
          <Table sx={{ minWidth: 250 }} aria-label="simple table">
            <TableHead className='bg-mainBlue'>
              <TableRow>
                <TableCell style={{ color: 'white' }} className='text-textWhite'>Products</TableCell>
                <TableCell style={{ color: 'white' }} align="left">Price</TableCell>
                <TableCell style={{ color: 'white' }} align="left">Quantity</TableCell>
                <TableCell style={{ color: 'white' }} align="right">Subtotal</TableCell>
                <TableCell style={{ color: 'white' }} align="right">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((product) => (
                <TableRow

                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={product.thumbnail} alt="" className='w-[90px] h-[90px] border border-mainBlue rounded-lg object-cover ' />
                  </TableCell>
                  <TableCell align="left">${product.price}</TableCell>
                  <TableCell align="left">
                    <div className='flex items-center'>
                      <button className='px-[8px] py-[4px] bg-slate-300 text-[18px]'>-</button>
                      <span className='px-[8px] py-[4px] bg-slate-300 text-[18px]'>{product.count}</span>
                      <button className='px-[8px] py-[4px] bg-slate-300 text-[18px]'>+</button>
                    </div>
                  </TableCell>
                  <TableCell align="right">${product.cartTotal}</TableCell>
                  <TableCell align="right">
                    <button className='text-red-400' onClick={() => handleRemoveProduct(product)}>Remove</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* INFO/CART */}
        <div className='w-full lg:w-[30%]'>
          <h2 className='text-white font-bold bg-mainBlue px-[20px] py-[15px]'>CART TOTAL</h2>
          <div className='py-[20px] px-[20px]  text-[28] font-extrabold '>
            <span>Total price: ${}</span>
          </div>


          <div className='flex flex-col items-center justify-between'>
            <input type="text" placeholder='Coupon Code' className='px-[23px] py-[8px] outline-none rounded-[20px] placeholder:textColor border border-textColor items-center justify-center mt-[25px]'
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            
            />
            <span className='text-mainBlue text-[14px] mt-[10px]'>Insert cupon for 50% discount</span>
            <button className='bg-mainYellow px-[20px] py-[10px] rounded-[15px] text-whiteColor hover:bg-mainBlue duration-500 cursor-pointer mt-[10px]'
            //onClick={handleAplyCoupon}
            > Coupon Applied</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
