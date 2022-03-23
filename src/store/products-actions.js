import {productsActions} from './products-slice';
import { uiActions } from './ui-slice';

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