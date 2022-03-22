import {createSlice} from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'product',
    initialState: {
        product: {
            name: '',
            brand: '',
            picture: '',
            price: 0,
            discount: 0,
            description: '',
            color: '',
            size: '',
            articleCode: '',
            season: '',
            sex: '',
            material: '' 
        },
    },
    reducers:{
        getProduct(state, action){
            state.product.name = action.payload.product.name;
            state.product.brand = action.payload.product.brand;
            state.product.picture = action.payload.product.picture;
            state.product.price = action.payload.product.price;
            state.product.discount = action.payload.product.discount;
            state.product.description = action.payload.product.description;
            state.product.color = action.payload.product.color;
            state.product.size = action.payload.product.size;
            state.product.articleCode = action.payload.product.articleCode;
            state.product.season = action.payload.product.season;
            state.product.sex = action.payload.product.sex;
            state.product.material = action.payload.product.material; 

        },
    }
})

export const productsActions = productsSlice.actions;

export default productsSlice;