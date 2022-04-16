import React from 'react'
import '../ProductCreate.css';


const CheckboxComponent = (props) => {
  return (
    <div className='inputContainerCheckboxes'>
        {props.name === 'size' ? (
            <div>
        <p>Velicine proizvoda</p>
        <div className='checkCont'>
            <p className='labelCheck'>S</p>
            <input 
            className='checkBox'
            type='checkbox' 
            onChange={props.checkHandlerS}
            value='S'
            checked={props.valueS === 'S'}/>
        </div>
        <div className='checkCont'>
            <p className='labelCheck'>M</p>
            <input 
            className='checkBox'
            type='checkbox' 
            onChange={props.checkHandlerM}
            value='M'
            checked={props.valueM === 'M'}/>
        </div>
        <div className='checkCont'>
            <p className='labelCheck'>L</p>
            <input 
            className='checkBox'
            type='checkbox' 
            onChange={props.checkHandlerL}
            value='L'
            checked={props.valueL === 'L'}/>
        </div>
        <div className='checkCont'>
            <p className='labelCheck'>XL</p>
            <input 
            className='checkBox'
            type='checkbox' 
            onChange={props.checkHandlerXL}
            value='XL'
            checked={props.valueXL === 'XL'}/>
        </div>
        {props.show && (<button onClick={props.sizeBtnHandler} className='btnCheckSubmit'><b>Potvrdi velicine proizvoda</b></button>)}
        </div>
        ):(
            <div>
            <p>Boje proizvoda</p>
            <div className='checkCont'>
                <p className='labelCheckColorBlue'></p>
                <input 
                className='checkBox'
                type='checkbox' 
                onChange={props.checkHandlerBlue}
                value='plava'
                checked={props.valueBlue === 'plava'}/>
            </div>
            <div className='checkCont'>
                <p className='labelCheckColorBlack'></p>
                <input 
                className='checkBox'
                type='checkbox' 
                onChange={props.checkHandlerBlack}
                value='crna'
                checked={props.valueBlack === 'crna'}/>
            </div>
            <div className='checkCont'>
                <p className='labelCheckColorYellow'></p>
                <input 
                className='checkBox'
                type='checkbox' 
                onChange={props.checkHandlerYellow}
                value='zuta'
                checked={props.valueYellow === 'zuta'}/>
            </div>
            <div className='checkCont'>
                <p className='labelCheckColorRed'></p>
                <input 
                className='checkBox'
                type='checkbox' 
                onChange={props.checkHandlerRed}
                value='crvena'
                checked={props.valueRed === 'crvena'}/>
            </div>
            {props.show && (<button onClick={props.colorBtnHandler} className='btnCheckSubmit'><b>Potvrdi boje proizvoda</b></button>)}
            </div>
        )}
    </div>
  )
}

export default CheckboxComponent
