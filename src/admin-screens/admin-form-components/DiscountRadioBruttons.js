import React from 'react'
import '../ProductCreate.css'

const DiscountRadioBruttons = (props) => {
  return (
    <div className="inputContainerCreate">
                    <p className="inputLabelCreate">Popust na prozivod?</p>
                    <div className="mainDiscountContainer">
                        <div className="radioContainer">
                            <p>Da</p>
                            <input 
                            className="radioBtn" 
                            type='radio' 
                            name="discount" 
                            value='da'
                            onChange={props.onChangeRadioHandler}
                            checked={props.radioValue === 'da'} />
                        </div>
                        <div className="radioContainer">
                            <p>Ne</p>
                            <input 
                            className="radioBtn" 
                            type='radio' 
                            name="discount" 
                            value='ne'
                            onChange={props.onChangeRadioHandler}
                            checked={props.radioValue === 'ne'} />
                        </div>
                        {props.radioValue === 'da' && (
                            <div className="discCont">
                                <p>Unesite popust na proizvod</p>
                                <input 
                                className="discountInput"
                                type='number' 
                                placeholder="%"
                                value={props.discount}
                                onChange={props.discountHandler}/>
                            </div>
                        )}
                    </div>
                </div>
  )
}

export default DiscountRadioBruttons
