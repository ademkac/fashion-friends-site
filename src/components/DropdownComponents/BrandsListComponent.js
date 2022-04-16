import React from "react";
import './BrandsListComponent.css';
import { Link } from "react-router-dom"; 

const BrandsListComponent = (props) => {
    return(
          <div className="insidebrandListContainer">
                <ul id="brandListList">
                    <li><Link className="brandListLink" to='/brendovi/Bata'>Bata </Link></li>  
                    <li><Link className="brandListLink" to='/brendovi/Cesare Paciotti'>Cesare Paciotti </Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Dstrezzed'>Dstrezzed </Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Gailo'>Gailo</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Just Cavalli'>Just Cavalli</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Moose Knuckles'>Moose Knuckles</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Premiata'>Premiata</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Scotch&Soda'>Scotch&Soda</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Tommy Hilfiger'>Tommy Hilfiger</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Woolrich'>Woolrich</Link></li>

            
                </ul>
                <ul id="brandListList1">
                    <li><Link className="brandListLink" to='/brendovi/Boss'>Boss </Link></li>  
                    <li><Link className="brandListLink" to='/brendovi/Colmar'>Colmar</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Fedeli'>Fedeli </Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Guess'>Guess</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Levis'>Levi's</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/New Balance'>New Balance</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Puma'>Puma</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Steve Madden'>Steve Madden</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Trussardi'>Trussardi</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/UGG'>UGG</Link></li>
                </ul>
                <ul id="brandListList2">
                    <li><Link className="brandListLink" to='/brendovi/Boss'>Calvin Klein </Link></li>  
                    <li><Link className="brandListLink" to='/brendovi/Colmar'>Crime London</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Fedeli'>Franklin&Marshall </Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Guess'>Havaianas</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/LOcitane'>L'Occitane</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Paciotti-4US'>Paciotti 4US</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Replay'>Replay</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Superdry'>Superdry</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/VersaceJeansCouture'>Versace Jeans Couture</Link></li>

                </ul>
                <ul id="brandListList3">
                    <li><Link className="brandListLink" to='/brendovi/Camper'>Camper </Link></li>  
                    <li><Link className="brandListLink" to='/brendovi/Diesel'>Diesel</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/FrankieMorello'>Frankie Morello </Link></li>
                    <li><Link className="brandListLink" to='/brendovi/HUGO'>HUGO</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Lyle&Scott'>Lyle&Scott</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/PhilippeModel'>Philippe Model</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Saucony'>Saucony</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Timberland'>Timberland</Link></li>
                    <li><Link className="brandListLink" to='/brendovi/Wellensteyn'>Wellensteyn</Link></li>
                </ul>
                
            </div>
    )
}

export default BrandsListComponent;