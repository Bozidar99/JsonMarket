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
                copyFavorite.push({...action.payload}) 
                
                state.totalFavorite++
            }else{
                 copyFavorite.splice(findIndex,1)
                 state.totalFavorite--
            }

            state.favorite = copyFavorite
            
            
        },
        deleteFromFavoriteAction: (state, action) => {
            let copyFavorite = [...state.favorite]
            console.log(action.payload);

            let findIndex = null

            copyFavorite.find((item, index) => {
                if (item.id === action.payload.id) {
                    findIndex = index
                    return
                }
            })

            if (findIndex !== null) {
                copyFavorite.splice(findIndex, 1)
                state.totalProduct--
                //state.totalPrice = subTotal(copyFavorite)
            }

            state.favorite = copyFavorite
            localStorage.setItem('favorite_item', JSON.stringify(copyFavorite))
            localStorage.setItem('favorite_total', JSON.stringify(state.totalProduct))
        }
         
        
    }
})

export const {addToFavorite, deleteFromFavoriteAction}  = favoriteSlice.actions
export default favoriteSlice.reducer