import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios'

const url = process.env.REACT_APP_CARDS_URL;

export const getCards = createAsyncThunk(
    'cards/getCards',
    async () => {
            // promise fetch
           return axios.get(url)
    }
    )

    

const initialState = {
    cards: [],
    isLoading: false,
}

export const cardsSlice = createSlice({
    name:'cards',
    initialState,
    reducers:{
        addCard: (state, action) => {
            console.log("addCard reducer", "state:", state, "action:", action)
        },
        getCard: (state, action) => {
            console.log("updateCard reducer", "state:", state, "action:", action)
        },
        getFilteredCards: (state, action) => {
            console.log("updateCard reducer", "state:", state, "action:", action)
        },
        updateCard: (state, action) => {
            console.log("updateCard reducer", "state:", state, "action:", action)
        },
        deleteCard: (state, action) => {
            console.log("deleteCard reducer", "state:", state, "action:", action)
        },

    },
    extraReducers:{
        [getCards.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getCards.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.cards = action.payload.data;
        },
        [getCards.rejected]: (state, action)=>{
            console.log(action)
            state.isLoading = false;
        },

    }

})

export const { addCards,getCard,getFilteredCards, updateCard, deleteCard} = cardsSlice.actions;

export default cardsSlice.reducer;