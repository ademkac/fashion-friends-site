import React from "react";
import './SearchModalComponent.css';


const SearchModalComponent = (props) => {
    return(
        <div className="insideModalComponent">
            
            <div className="rightInsideModalComponent">
                <p>Proizvodi</p>
                {props.products.map((obj, idx)=>{
                    return(
                        <div key={idx} className="modalProductItem">
                            <img src={obj.slika}  alt=''/>
                            <div className="pContainerModal">
                                <p className="topP">{obj.opis}</p>
                                <p className="oldPriceItem">{obj.staraCena} RSD</p>
                                <p className="newPriceItem">{obj.staraCena-obj.staraCena*obj.popust/100} RSD</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="leftInsideModalComponent">
                <div className="topLeftModalComponent">
                    <p>Popularne pretrage</p>
                    <ul id="modalList">
                        {props.popularSearch.map((obj, idx)=>{
                            return(
                                <li key={idx} className="modalItemList">{obj.name}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="bottomLeftModalComponent">
                        <p id="titl">Brend</p>
                        {
                            props.brands.map((obj, idx)=>{
                                return(
                                    <div key={idx} className="brandItemWithImg">
                                        <img src={obj.slika} alt=''/>
                                        <p>{obj.name}</p>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    )
}

export default SearchModalComponent;