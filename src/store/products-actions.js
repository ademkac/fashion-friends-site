import {productsActions} from './products-slice';

export const fetchProduct = (id) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://localhost:7263/api/ProductControler/'+id
            );

            if(!response.ok) {
                throw new Error('Proizvod trenutno nije dostupan!');
            }

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
            console.log("greska prilikom uzimanja produkta sa servera: "+error)
        }
    }
}