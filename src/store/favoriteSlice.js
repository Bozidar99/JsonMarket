import { createSlice } from "@reduxjs/toolkit";


const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorite: [],
        totalFavorite: 0
    },
    reducers:{
        addToFavorite: (state, action) => {
            console.log(action.payload);
            let copyFavorite = [...state.favorite]

            let findIndex = null

            copyFavorite.find((item,index) => {
                if(item.id === action.payload.id){
                    findIndex = index
                    return
                }
            })

            if(findIndex === null){
                copyFavorite.push({...action.payload, count: 1, favoriteTotal: action.payload.price}) 
                
                state.totalFavorite++
            }else{
                 copyFavorite[findIndex].count++
            }

            state.favorite = copyFavorite
            
        }
    }
})

export const {addToFavorite}  = favoriteSlice.actions
export default favoriteSlice.reducer