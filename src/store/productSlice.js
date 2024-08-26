import { createSlice } from "@reduxjs/toolkit";



const productSlice = createSlice({
    name: 'product',
    initialState: {
        allProducts: [],
        productLoader : false,
        selectCatregory : '',
        searchProducts : ''
    },
    reducers: {
        saveAllProductsAction: (state, action) => {
            state.allProducts = action.payload
            state.productLoader = true
        },

        saveSelectCatregoryAction: (state, action) => {
            state.selectCatregory = action.payload
        },

        saveSearchProductAction: (state, action) => {
            state.searchProducts = action.payload
        }
    }
})

export const {saveAllProductsAction, saveSelectCatregoryAction, saveSearchProductAction} = productSlice.actions
export default productSlice.reducer