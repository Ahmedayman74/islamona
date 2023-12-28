import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: [],
// }

export const favReciterSlice = createSlice({
  name: 'favReciter',
  initialState : [],
  reducers: { 
    addToFavReciterArray: (state, action) => {
      const findProduct = state.find((fav) => fav.surahId === action.payload.surahId && fav.reciterId === action.payload.reciterId)
      if (!findProduct) {
        state.push(action.payload)
      } 
    },
    removeFromFavReciterArray: (state, action) => {
        return state.filter((fav) => !(fav.surahId === action.payload.surahId && fav.reciterId === action.payload.reciterId))
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToFavReciterArray , removeFromFavReciterArray } = favReciterSlice.actions

export default favReciterSlice.reducer