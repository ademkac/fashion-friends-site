
import { Link } from 'react-router-dom';
import './Footer.css';
import slika from '../../assets/ckLogo.jpg'
import slika1 from '../../assets/tommyLogo.jpg'
import slika2 from '../../assets/replayLogo.jpg'
import slika3 from '../../assets/cards.jpg'


const Footer = () => {
    return(
        <div className='footerContainer'>
            <div className='insideFooterCon'>
                <div className='firstFooterCon'>
                    <h2>FASHION<span className='spanCol'>&</span>FRIENDS</h2>
                    <div className="socialList">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-pinterest-p"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                    <div className='socialLine'>
                    <i className="fab fa-location"></i>                        
                    <p>.</p>
                    </div>
                    <div className='socialLine'>
                    <i className="fas fa-envelope"></i>                
                        <p>ademkacapor3@gmail.com</p>
                    </div>
                    <div className='socialLine'>
                    <i className="fas fa-phone"></i>                    
                        <p>+381 654677686</p>
                    </div>
                    <div className='socialLine'>
                    <i className="fas fa-clock"></i>
                    <p>Radnim danima 09:00-17:00h</p>
                    </div>
                    <div className='cardsPic'><img src={slika3} alt='' /></div>
                </div>
                <div className='secondFooterCon'>
                    <h3>Kategorije</h3>
                    <Link className='linkIt' to="/muskarci">Muskarci</Link>
                    <Link className='linkIt' to="/zene">Zene</Link>
                    <Link className='linkIt' to="/deca">Deca</Link>

                </div>
                <div className='secondFooterCon'>
                    <h3>Informacije</h3>
                    <Link className='linkIt' to="/muskarci">O nama</Link>
                    <Link className='linkIt' to="/zene">Politika privatnosti</Link>
                    <Link className='linkIt' to="/deca">Politika kolacica</Link>
                    <Link className='linkIt' to="/deca">Prodajna mesta</Link>
                    <Link className='linkIt' to="/deca">Kontakt</Link>
                    <Link className='linkIt' to="/deca">Loyalty</Link>

                </div>
                <div className='thirdFooterCon'>
                    <h3>O prodavnici</h3>
                    <Link className='linkIt' to="/muskarci">Opsti uslovi</Link>
                    <Link className='linkIt' to="/zene">Narucivanje i placanje</Link>
                    <Link className='linkIt' to="/deca">Odustanak od kupovine</Link>
                    <Link className='linkIt' to="/deca">Reklamacije</Link>
                    <Link className='linkIt' to="/deca">Najcesca pitanja</Link>
                </div>
                <div className='fourthFooterCon'>
                    <h3>Instagram Feed</h3>
                    <div className='instaFirstRow'>
                        <img src={slika} alt=""/>
                        <img src={slika1} alt=""/>
                        <img src={slika2} alt=""/>
                    </div>
                    <div className='instaSecondRow'>
                        <img src={slika} alt=""/>
                        <img src={slika1} alt=""/>
                        <img src={slika2} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer