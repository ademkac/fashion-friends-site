import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    return(
        <div className='letterCon'>
            <div className='insideLetterCon'>
                <h3>PRIJAVA NA NEWSLETTER</h3>
                <p>Ostavi nam svoj email i budi u toku sa F&F dešavanjima!</p>
                <div className='inputAndButton'>
                    <input type='email' placeholder='Vasa email adresa' />
                    <button>Prijavite se</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;