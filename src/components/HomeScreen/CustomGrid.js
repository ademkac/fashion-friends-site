import React from 'react';
import './CustomGrid.css'
import slika from '../../assets/steveMaden.png';
import slika2 from '../../assets/versaceCouture.png';
import slika1 from '../../assets/calvinKlein.png';
import slika3 from '../../assets/superdry.png';
import { Link } from 'react-router-dom';



const CustomGrid = () => {
    return(
        <div className="customGridContainer">
            <div className="insideCustomGrid">
                <Link to='/brendovi/Steve Madden' className='imgCon'>
                    <img src={slika} alt=''/>
                </Link>
                <div className='rightCon'>
                    <div className='topRight'>
                        <Link to='/brendovi/VersaceJeansCouture' className='topRightL'>
                            <img src={slika2} alt=''/>
                        </Link>
                        <Link to='/brendovi/Calvin Klein' className='topRightR'>
                            <img src={slika1} alt=''/>
                        </Link>
                    </div>
                    <Link to='/brendovi/Superdry' className='bottomRight'>
                        <img src={slika3} alt=''/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CustomGrid;