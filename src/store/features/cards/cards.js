import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { asyncCardsFunctions } from './functions';



export const getCards = createAsyncThunk('cards/getCards',asyncCardsFunctions.getCards )

export const getFilteredCards = createAsyncThunk('cards/getFilteredCards',asyncCardsFunctions.getFilteredCards )

    

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
        // getFilteredCards: (state, action) => {
        //     console.log("updateCard reducer", "state:", state, "action:", action)
        // },
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
        [getFilteredCards.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getFilteredCards.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.cards = action.payload.data;
        },
        [getFilteredCards.rejected]: (state, action)=>{
            console.log(action)
            state.isLoading = false;
        },

    }

})

export const { addCards,getCard, updateCard, deleteCard} = cardsSlice.actions;

export default cardsSlice.reducer;