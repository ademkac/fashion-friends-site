import {createSlice} from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        categoryProducts: [],
        sizeProducts: [],
        product: {
            name: '',
            brand: '',
            picture: '',
            price: 0,
            discount: 0,
            description: '',
            color: [],
            size: [],
            articleCode: '',
            season: '',
            sex: '',
            material: '' 
        },
        isLoading: false
    },
    reducers:{
        setProducts(state, action){
            state.products = action.payload.products
        },
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
        findCategoryOfBrand(state, action){
            state.products.map(obj=>{
                if(obj.category === action.payload){
                    state.categoryProducts.push(obj)
                }
            })
        },
        findSizeOfBrand(state, action){
            state.products.map(obj=>{
                obj.size.map(obj1=>{
                    if(obj1.size === action.payload){
                        state.sizeProducts.push(obj)
                    }
                })
            })
        },
        setIsLoading(state, action){
            state.isLoading = action.payload;
        }
    }
})

export const productsActions = productsSlice.actions;

export default productsSlice;