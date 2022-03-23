import {configureStore} from '@reduxjs/toolkit';

import productsSlice from './products-slice';
import cartSlice from './cart-slice';
import uiSlice from './ui-slice';

const store = configureStore({
    reducer: { 
        product: productsSlice.reducer,
        cart: cartSlice.reducer,
        ui: uiSlice.reducer}
})

export default store;