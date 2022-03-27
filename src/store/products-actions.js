import {productsActions} from './products-slice';
import { uiActions } from './ui-slice';


export const fetchProductsData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://localhost:7263/api/ProductControler/'
            );
            dispatch(
                productsActions.setIsLoading(true)
            )

            if(!response.ok){
                throw new Error('Trenutno ne mozemo prikazati proizvode!');
            }

            const data = await response.json();

            return data;
        };

        try {
            const productsData = await fetchData();
            dispatch(
                productsActions.setProducts({
                    products: productsData
                })
            )
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Nije moguce prikazati proizvode!'
                })
            )
        }
    }
}


export const fetchProduct = (id) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://localhost:7263/api/ProductControler/'+id
            );
            dispatch(
                productsActions.setIsLoading(true)
            )

            if(!response.ok) {
                throw new Error('Proizvod trenutno nije dostupan!');
            }
            dispatch(
                productsActions.setIsLoading(false)
            )

            const data = await response.json();
            console.log("data from backend: "+data)
            return data;
        };

        try {
            const product = await fetchData();
            dispatch(
                productsActions.getProduct({
                    product: product
                })
            );
        } catch (error) {
            dispatch(
                productsActions.setIsLoading(false)
            )
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Trenutno nije moguce prikazati proizvod!'
                })
            )
        }
    }
}