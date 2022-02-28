import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCards = createAsyncThunk(
        'cards/getCards',
        async () => {
            // promise fetch
        }
        
        )

const initialState = {
    data:{},
    isLoading: false,
}

export const cardsSlice = createSlice({
    name:'cards',
    initialState,
    reducers:{
        addCard: (state, action) => {
            // axios.post('add-card-url').then(res=> res.status(200).json()).catch(err => res.status(500))
            // state.value.push(action.payload) --> how to work with the reducer, is mutable
            console.log("addCard reducer", "state:", state, "action:", action)
        },
        getCard: (state, action) => {
            // axios.post('set-card-url').then(res=> res.status(200).json()).catch(err => res.status(500))
            // state.value.push(action.payload) --> how to work with the reducer
            console.log("updateCard reducer", "state:", state, "action:", action)
        },
        getCards: (state, action) => {
            // axios.post('set-card-url').then(res=> res.status(200).json()).catch(err => res.status(500))
            // state.value.push(action.payload) --> how to work with the reducer
            console.log("updateCard reducer", "state:", state, "action:", action)
        },
        getFilteredCards: (state, action) => {
            // axios.post('set-card-url').then(res=> res.status(200).json()).catch(err => res.status(500))
            // state.value.push(action.payload) --> how to work with the reducer
            console.log("updateCard reducer", "state:", state, "action:", action)
        },
        updateCard: (state, action) => {
            // axios.post('set-card-url').then(res=> res.status(200).json()).catch(err => res.status(500))
            // state.value.push(action.payload) --> how to work with the reducer
            console.log("updateCard reducer", "state:", state, "action:", action)
        },
        deleteCard: (state, action) => {
            // axios.post('remove-card-url').then(res=> res.status(200).json()).catch(err => res.status(500))
            // state.value.push(action.payload) --> how to work with the reducer
            console.log("deleteCard reducer", "state:", state, "action:", action)
        },

    },
    extraReducers:{
        [getCards.pending]: ()=>{
            // state.isLoading = true
        },
        [getCards.fulfilled]: ()=>{
            // state.isLoading = false
        },
        [getCards.rejected]: ()=>{
            // state.isLoading = false;
        },
    }

})

export const { addCards,getCard,getFilteredCards, updateCard, deleteCard} = cardsSlice.actions;

export default cardsSlice.reducer;