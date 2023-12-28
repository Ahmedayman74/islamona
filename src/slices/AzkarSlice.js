import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


 
export const fetchProducts = createAsyncThunk("AzkarSlice/fetchProducts" , async () => {
    const date = new Date()
    const res = await fetch(`https://api.aladhan.com/v1/timingsByCity/${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}?city=cairo&country=egypt`)
    const data = await res.json()
    return data
})




const AzkarSlice = createSlice({
    name: 'AzkarSlice',
    initialState : [],
    reducers: {},
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        return action.payload
      })
    },
  })


  export default AzkarSlice.reducer