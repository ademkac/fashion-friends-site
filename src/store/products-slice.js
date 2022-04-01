import {createSlice} from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        categoryProducts: [],
        sizeProducts: [],
        colorProducts: [],
        twoFilterProducts: [],
        seasonProducts: [],
        sexProducts: [],
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
        findSeasonOfBrand(state, action){
            state.seasonProducts = []
            state.products.map(obj=>{
                if(obj.season === action.payload){
                    state.seasonProducts.push(obj)
                }
            })
        },
        findSexOfBrand(state, action){
            state.sexProducts = []
            state.products.map(obj=>{
                if(obj.sex === action.payload){
                    state.sexProducts.push(obj)
                }
            })
        },
        findSizeOfBrand(state, action){
            let niz1 = []
            state.products.map(obj=>{
                obj.size.map(obj1=>{
                    if(obj1.size === action.payload){
                        niz1.push(obj)
                    }
                })
            })
            if(niz1.length !== 0){
                state.sizeProducts = [...new Set(niz1.map(a=>a))]
            }
        },
        findColorOfBrand(state, action){
            let niz = []
            state.products.map(obj=>{ 
                obj.color.map(obj1=>{
                    if(obj1.color === action.payload){
                        niz.push(obj)
                    }
                })
            })
            if(niz.length !== 0){
                state.colorProducts = [...new Set(niz.map(a=>a))]
            }
            
        },
        filterProductsTwoParams(state, action){
            let niz = [];
            state.products.map(obj=>{
                if(action.payload.filter === 'category'){
                    if(obj.category === action.payload.info){
                        niz.push(obj) 
                    }
                }else if(action.payload.filter === 'season'){
                    if(obj.season === action.payload.info){
                        niz.push(obj)
                    }
                }else if(action.payload.filter === 'sex'){
                    if(obj.sex === action.payload.info){
                        niz.push(obj)
                    }
                }else if(action.payload.filter === 'price'){
                    if(obj.price === action.payload.info){
                        niz.push(obj)
                    }
                }else if(action.payload.filter === 'color'){
                    obj.color.map(obj1=> {
                        if(obj1.color === action.payload.info){
                            niz.push(obj)
                        }
                    })
                }else if(action.payload.filter === 'size'){
                    obj.size.map(obj1=>{
                        if(obj1.size === action.payload.info){
                            niz.push(obj)
                        }
                    })
                }else{
                    return state.twoFilterProducts;
                }
            })
            state.twoFilterProducts = [...new Set(niz.map(a=>a))]
            state.twoFilterProducts = [...new Set(state.twoFilterProducts.map(a=>a))]
        },
        backColorProductsToInitial(state){
            state.colorProducts = [];
        },
        backSizeProductsToInitial(state){
            state.sizeProducts = []
        },
        backToInitalState(state){
            state.categoryProducts = [];
            state.colorProducts = [];
            state.sizeProducts = [];
            state.twoFilterProducts = [];
            state.seasonProducts = [];
        },
        setIsLoading(state, action){
            state.isLoading = action.payload;
        }
    }
})

export const productsActions = productsSlice.actions;

export default productsSlice;