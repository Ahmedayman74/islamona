import { configureStore  } from '@reduxjs/toolkit'
import favReciterSlice from './slices/favReciterSlice'
import AzkarSlice from './slices/AzkarSlice'

export const store = configureStore({
  reducer: {
    favReciter : favReciterSlice ,
    azkarTime : AzkarSlice,
  },
})

