import { createSlice } from "@reduxjs/toolkit";



const productSlice = createSlice({
    name: 'product',
    initialState: {
        allProducts: [],
        productLoader : false
    },
    reducers: {
        saveAllProductsAction: (state, action) => {
            state.allProducts = action.payload
            state.productLoader = true
        }
    }
})

export const {saveAllProductsAction} = productSlice.actions
export default productSlice.reducer