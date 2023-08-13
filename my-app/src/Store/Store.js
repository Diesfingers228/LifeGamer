import { configureStore } from '@reduxjs/toolkit'
import FirstSlice from './Slices/FirstSlice'

export default configureStore({
    reducer: {
        FirstReducer: FirstSlice
    }
});