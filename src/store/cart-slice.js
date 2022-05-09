import {createSlice} from '@reduxjs/toolkit';
import slika from '../assets/glamur.jpg'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [
            {
                id: 1,
                name: 'Tommy Hilfiger',
                slika: slika,
                title: 'Jakna sa dva lica',
                size: 'M',
                color: 'Plava',
                price: 15500,
                quantity: 1
            },
            {
                id: 2,
                name: 'Calvin Klein',
                slika: slika,
                title: 'Jakna sa dva lica',
                size: 'M',
                color: 'Plava',
                price: 15500,
                quantity: 1
            }
        ]
    },
    reducers: {
        addItemToCart(state, action){
        const existingItem = state.items.find(item=> item.id === action.payload.id)
        if(existingItem){
            existingItem.quantity = action.payload.value
        }else{
            console.log("Nisi uneo dobre parametre");
        }
    },
        removeItemFromCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if(existingItem){
                state.items = state.items.filter(item => item.id !== id);
            }else{
                console.log("Nesto nije u redu");
            }
        }
    }
})


export const cartActions = cartSlice.actions;

export default cartSlice;
