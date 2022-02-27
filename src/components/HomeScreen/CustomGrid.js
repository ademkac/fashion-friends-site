import './CustomGrid.css'
import slika from '../../assets/customGrid.png';
import slika1 from '../../assets/customDisign.png';

const CustomGrid = () => {
    return(
        <div className="customGridContainer">
            <div className="insideCustomGrid">
                <div className='imgCon'>
                    <img src={slika} alt=''/>
                </div>
                <div className='rightCon'>
                    <div className='topRight'>
                        <div className='topRightL'>
                            <img src={slika} alt=''/>
                        </div>
                        <div className='topRightR'>
                            <img src={slika} alt=''/>
                        </div>
                    </div>
                    <div className='bottomRight'>
                        <img src={slika1} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomGrid;