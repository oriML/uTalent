import {configureStore} from '@reduxjs/toolkit'
import userReducer from './features/user'
import cardsReducer from './features/cards'
import userAuthReducer from './features/userAuth'

export const store = configureStore({
    reducer: {
        user: userReducer,
        cards: cardsReducer,
        userAuth: userAuthReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
      })
})