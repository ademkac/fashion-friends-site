import './NewsGrid.css'
import slika from '../../assets/voli.jpg';
import slika1 from '../../assets/glamur.jpg';

const NewsGrid = () => {
    return (
        <div className='newsContainer'>
            <div className='insideContainer'>
                <h1>Najnovije vesti</h1>
                <p>Aktuelnosti iz sveta mode</p>
                <div className='cardsCont'>
                    <div className='twoCards'>
                        <img src={slika} alt="" />
                        <h1>Najnovije vesti</h1>
                        <p>Aktuelnosti iz sveta mode</p>
                        <button>Procitajte vise</button>
                    </div>
                    <div className='twoCards'>
                        <img src={slika1} alt="" />
                        <h1>Najnovije vesti</h1>
                        <p>Aktuelnosti iz sveta mode</p>
                        <button>Procitajte vise</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsGrid