import React from 'react'
import '../ProductCreate.css'

const ImageUpload = (props) => {
  return (
    <div className="inputPictureCreate">
        <p>Izaberite slike proizvoda</p>
        <input 
            className="inputImages"
            type='file' 
            multiple 
            accept="image/*" 
            onChange={props.onImageChange} />
            {props.imageURLs.length !== 0 && (
                <div className={props.imagesContClass}>
                    {props.imageURLs.map((imageSrc, idx) => <img key={idx} className="imageCont" alt="" src={imageSrc.picture} />)}
                </div>
            )}
    </div>
  )
} 

export default ImageUpload
