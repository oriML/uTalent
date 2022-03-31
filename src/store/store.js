import {configureStore} from '@reduxjs/toolkit'
import userReducer from './features/user/user'
import cardsReducer from './features/cards'
import userAuthReducer from './features/userAuth'
import uploadsReducer from './features/uploads'
import uiReducer from './features/ui'

export const store = configureStore({
    reducer: {
        user: userReducer,
        cards: cardsReducer,
        userAuth: userAuthReducer,
        uploads: uploadsReducer,
        ui: uiReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
      })
})