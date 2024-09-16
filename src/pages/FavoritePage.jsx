import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice'



function FavoritePage() {


  
  const { favorite } = useSelector((state) => state.favoriteStore);

  const dispatch = useDispatch()

  return (
    <div className='mt-[50px]'>
      <div className='container mx-auto flex flex-col lg:flex-row gap-[20px]'>
      <TableContainer component={Paper} className='w-full lg:w-[70%]'>
        <Table sx={{ minWidth: 250 }} aria-label="simple table">
          <TableHead className='bg-mainBlue'>
            <TableRow>
              <TableCell style={{color: 'white'}} className='text-textWhite'>Products</TableCell>
              <TableCell style={{color: 'white'}} align="left">Title</TableCell>
              <TableCell style={{color: 'white'}} align="left">Price</TableCell>
              <TableCell style={{color: 'white'}} align="right">Add to cart</TableCell>
              <TableCell style={{color: 'white'}} align="right">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {favorite.map((product) => (
              <TableRow 

                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={product.thumbnail} alt="" className='w-[90px] h-[90px] border border-mainBlue rounded-lg object-cover ' />
                </TableCell>
                <TableCell align="left">{product.title}</TableCell>
                <TableCell align="left">${product.price}</TableCell>
                <TableCell align="right">
                  <button className='bg-mainYellow px-[20px] py-[10px] rounded-[15px] text-whiteColor hover:bg-mainBlue duration-500 cursor-pointer'
                  onClick={() => dispatch(addToCart(product))}
                  >Add to cart</button>
                </TableCell>
                <TableCell align="right">
                  <button className='text-red-400'>Remove</button>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      </div>

    </div>
  )
}

export default FavoritePage
