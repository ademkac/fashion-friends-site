import {configureStore} from '@reduxjs/toolkit';

import productsSlice from './products-slice';
import cartSlice from './cart-slice';
import uiSlice from './ui-slice';
import authSlice from './auth-slice';

const store = configureStore({
    reducer: { 
        product: productsSlice.reducer,
        cart: cartSlice.reducer,
        ui: uiSlice.reducer,
        auth: authSlice.reducer}
})

export default store;