import React from 'react'
import '../ProductCreate.css'

const SelectBrandComponent = (props) => {
  return (
    <div className="inputContainerCreate">
        <p className="inputLabelCreate">Brend proizvoda</p>
            <select className="selectCreate" value={props.brandSelect} onChange={props.selectInputHandler}>
                {props.brands.map((obj, idx)=>{
                    return(
                        <option className="selectItem" key={idx} value={`${obj.name}`}>{obj.name}</option>
                    )
                })}
            </select>
    </div>
  )
}

export default SelectBrandComponent
