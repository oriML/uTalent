import {configureStore} from '@reduxjs/toolkit'
import userReducer from './features/user'
import cardsReducer from './features/cards'
import userAuthReducer from './features/userAuth'
import uploadsReducer from './features/uploads'

export const store = configureStore({
    reducer: {
        user: userReducer,
        cards: cardsReducer,
        userAuth: userAuthReducer,
        uploads: uploadsReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
      })
})