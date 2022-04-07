import { authActions } from "./auth-slice";


export const createUser = (user) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch(
                'https://localhost:7263/api/UserControler/register/',
                {
                    method: 'POST',
                    headers: {
                        "Accept": "text/plain",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user
                    })
                }
            );
            if(!response.ok){
                throw new Error('Neuspesna registracija!')
            }
        }

        try {
            await sendRequest();
            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Uspesno dodat korisnik!'
                })
            )
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Neuspesno dodat korisnik!'
                })
            )
        }
    }
}