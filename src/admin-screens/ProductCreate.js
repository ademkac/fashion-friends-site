import React, { useEffect, useState } from "react";
import DropdownMeni from "../components/HomeScreen/DropdownMeni";
import Footer from "../components/HomeScreen/Footer";
import FooterInfo from "../components/HomeScreen/FooterInfo";
import Header from "../components/HomeScreen/Header";
import SocialInfo from "../components/HomeScreen/SocialInfo";
import Newsletter from "../components/Newsletter";
import Notification from "../custom/Notification";
import './ProductCreate.css'
import { useDispatch, useSelector } from "react-redux";
import DiscountRadioBruttons from "./admin-form-components/DiscountRadioBruttons";
import SelectBrandComponent from "./admin-form-components/SelectBrandComponent";
import CheckboxComponent from "./admin-form-components/CheckboxComponent";
import ImageUpload from "./admin-form-components/ImageUpload";

const brands = [
    {name: 'Tommy Hilfiger'}, {name: 'Calvin Klein'}, {name: 'Diesel'}
]

const ProductCreate = () => {

    const [nameOfProduct, setNameOfProduct] = useState('')
    const [descriptionOfProduct, setDescriptionOfProduct] = useState('')
    const [brandSelect, setBrandSelect] = useState('Tommy Hilfiger')
    const [price, setPrice] = useState('')
    const [radioValue, setRadioValue] = useState('ne')
    const [discount, setDiscount]=useState('')
    const [checkS, setCheckS] = useState('')
    const [checkM, setCheckM] = useState('')
    const [checkL, setCheckL] = useState('')
    const [checkXL, setCheckXL] = useState('')
    const [showButtonCheckSubmit, setShowButtonCheckSubmit] = useState(false)
    const [checkBlue, setCheckBlue] = useState('')
    const [checkBlack, setCheckBlack] = useState('')
    const [checkYellow, setCheckYellow] = useState('')
    const [checkRed, setCheckRed] = useState('')
    const [showButtonCheckSubmitColor, setShowButtonCheckSubmitColor] = useState(false)
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs]=useState([])
    const [articleCode, setArticleCode] = useState('')
    const [season, setSeason] =useState('Prolece-Leto')
    const [sex, setSex]=useState('Muski')
    const [category, setCategory]=useState('Jakne')
    const [material, setMaterial]=useState('Koza')
    const [colors, setColors] = useState([])
    const [sizes, setSizes] = useState([])
    const notification = useSelector(state=>state.ui.notification)
    const imagesContClass =  (imageURLs.length<=4 && imageURLs.length > 0)? 'imagesContainer four' : imageURLs.length === 0 ? 'imagesContainer' : 'imagesContainer eight';
    const colorArray = [], sizeArray = []

    useEffect(()=>{
        if(checkL !== '' || checkM !== '' || checkS !== '' || checkXL !== ''){
            setShowButtonCheckSubmit(true)
        }
        else{
            setShowButtonCheckSubmit(false)
        }
    }, [checkS, checkL, checkM, checkXL])

    useEffect(()=>{
        if(checkBlack !== '' || checkBlue !== '' || checkRed !== '' || checkYellow !== ''){
            setShowButtonCheckSubmitColor(true)
        }
        else{
            setShowButtonCheckSubmitColor(false)
        }
    }, [checkBlack, checkBlue, checkRed, checkYellow])

    useEffect(()=>{
        if(images.length < 1) return;
         const newImageUrls = [];
        images.forEach(image => newImageUrls.push({picture: URL.createObjectURL(image)}));
        setImageURLs(newImageUrls);
        console.log("images: "+JSON.stringify(imageURLs)) 
        
        /* const fileReader = new FileReader();
        fileReader.onloadend = () => {
            setImageURLs(newImageUrls)
        }
        images.forEach(image=> newImageUrls.push({picture: fileReader.readAsDataURL(image)}))
        console.log("images: "+imageURLs) */
    },[images])

    const setCheckSHandler = (e)=>{
        if(checkS === ''){
            setCheckS(e.target.value)
        }else{
            setCheckS('')
        }
    }

    const setCheckMHandler = (e)=>{
        if(checkM === ''){
            setCheckM(e.target.value)
        }else{
            setCheckM('')
        }
    }

    const setCheckLHandler = (e)=>{
        if(checkL === ''){
            setCheckL(e.target.value)
        }else{
            setCheckL('')
        }
    }

    const setCheckXLHandler = (e)=>{
        if(checkXL === ''){
            setCheckXL(e.target.value)
        }else{
            setCheckXL('')
        }
    }

    const setCheckColorBlackHandler = (e)=>{
        if(checkBlack === ''){
            setCheckBlack(e.target.value)
        }else{
            setCheckBlack('')
        }
    }

    const setCheckColorBlueHandler = (e)=>{
        if(checkBlue === ''){
            setCheckBlue(e.target.value)
        }else{
            setCheckBlue('')
        }
    }

    const setCheckColorYellowHandler = (e)=>{
        if(checkYellow === ''){
            setCheckYellow(e.target.value)
        }else{
            setCheckYellow('')
        }
    }

    const setCheckColorRedHandler = (e)=>{
        if(checkRed === ''){
            setCheckRed(e.target.value)
        }else{
            setCheckRed('')
        }
    }

    const onImageChange = (e) =>{
        setImages([...e.target.files]);
    }

    const colorBtnHandler = (e)=>{
        e.preventDefault()
        if(checkBlack !== ''){
            colorArray.push({color: checkBlack})
        }
        if(checkBlue !== ''){
            colorArray.push({color: checkBlue})
        }
        if(checkRed !== ''){
            colorArray.push({color: checkRed})
        }
        if(checkYellow !== ''){
            colorArray.push({color: checkYellow})
        }
        setColors(colorArray)
        console.log("colorArray 1: "+colorArray[0].color)
    }

    const sizeBtnHandler = (e)=>{
        e.preventDefault()
        if(checkS !== ''){
            sizeArray.push({size: checkS})
        }
        if(checkM !== ''){
            sizeArray.push({size: checkM})
        }
        if(checkL !== ''){
            sizeArray.push({size: checkL})
        }
        if(checkXL !== ''){
            sizeArray.push({size: checkXL})
        }
        setSizes(sizeArray)
        console.log("sizeArray: "+sizeArray[0].size)
    }
    
    const submitButtonHandler = async (e) => {
        e.preventDefault();
             try {
                await fetch('https://localhost:7263/api/ProductControler/', {
                method: 'POST',
                headers: {
                    "Accept":"text/plain",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: nameOfProduct,
                    picture: imageURLs,
                    price: parseInt(price),
                    discount: radioValue === 'ne' ? 0 : parseInt(discount),
                    description: descriptionOfProduct,
                    brand: brandSelect,
                    size: sizes,
                    color:colors,
                    articleCode: articleCode,
                    season: season,
                    sex: sex,
                    material: material,
                    category: category,
                    mainCategory: 'Odeca'})
            })
            } catch (error) {
                
            } 
    }

    return(
        <div className="productCreateContainer">
            <SocialInfo />
            <Header />
            <DropdownMeni />
            <div className="insideProductCreate">
                {notification && (
                    <Notification 
                    status={notification.status}
                    title={notification.title}
                    message={notification.message} />
                )}
                <h2>Dodajte novi proizvod</h2>
                <div className="inputContainerCreate">
                    <p className="inputLabelCreate">Ime proizvoda</p>
                    <input 
                    className="inputInputCreate" 
                    placeholder="Unesite ime proizvoda"
                    type='text'
                    value={nameOfProduct}
                    onChange={(e)=>setNameOfProduct(e.target.value)}/>
                </div>
                <SelectBrandComponent 
                brands={brands}
                brandSelect={brandSelect}
                selectInputHandler={(e)=>setBrandSelect(e.target.value)}
                />
                <div className="inputContainerCreate">
                    <p className="inputLabelCreate">Opis proizvoda</p>
                    <textarea 
                    className="inputInputCreate" 
                    placeholder="Unesite opis proizvoda"
                    rows={5}
                    value={descriptionOfProduct}
                    onChange={(e)=>setDescriptionOfProduct(e.target.value)}/>
                </div>
                <div className="inputContainerCreate">
                    <p className="inputLabelCreate">Cena proizvoda</p>
                    <input 
                    className="inputInputCreate" 
                    placeholder="Unesite cenu proizvoda"
                    type='number'
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                   <DiscountRadioBruttons
                   onChangeRadioHandler={(e)=>setRadioValue(e.target.value)}
                   radioValue={radioValue}
                   discount={discount}
                   discountHandler={(e)=>setDiscount(e.target.value)} />
                   <CheckboxComponent
                   name='size'
                   checkHandlerS={setCheckSHandler}
                   checkHandlerM={setCheckMHandler}
                   checkHandlerL={setCheckLHandler}
                   checkHandlerXL={setCheckXLHandler}
                   valueS={checkS} 
                   valueM={checkM}
                   valueL={checkL}
                   valueXL={checkXL}
                   show={showButtonCheckSubmit}
                   sizeBtnHandler={sizeBtnHandler}
                   />    
                   <CheckboxComponent
                   name='color'
                   checkHandlerRed={setCheckColorRedHandler}
                   checkHandlerBlack={setCheckColorBlackHandler}
                   checkHandlerBlue={setCheckColorBlueHandler}
                   checkHandlerYellow={setCheckColorYellowHandler}
                   valueBlack={checkBlack} 
                   valueRed={checkRed}
                   valueBlue={checkBlue}
                   valueYellow={checkYellow}
                   show={showButtonCheckSubmitColor}
                   colorBtnHandler={colorBtnHandler}
                   />
                   <ImageUpload 
                   onImageChange={onImageChange}
                   imageURLs={imageURLs}
                   imagesContClass={imagesContClass} />
                    <div className="detailsCont">
                        <div className="detailsItem">
                            <p>Kod artikla</p>
                            <input 
                            className="articleInput"
                            type='text' 
                            value={articleCode} 
                            onChange={(e)=>setArticleCode(e.target.value)} />
                        </div>
                        <div className="detailsItem">
                            <p>Sezona</p>
                            <select 
                            className="selectDetails"
                            value={season}
                            onChange={(e)=>setSeason(e.target.value)}>
                                <option value='Prolece-Leto'>Prolece-Leto</option>
                                <option value='Jesen-Zima'>Jesen-Zima</option>
                            </select>
                        </div>
                        <div className="detailsItem">
                            <p>Pol</p>
                            <select 
                            className="selectDetails"
                            value={sex}
                            onChange={(e)=>setSex(e.target.value)}>
                                <option value='Muski'>Muski</option>
                                <option value='Zenski'>Zenski</option>
                            </select>
                        </div>
                        <div className="detailsItem">
                            <p>Materijal</p>
                            <select 
                            className="selectDetails"
                            value={material}
                            onChange={(e)=>setMaterial(e.target.value)}>
                                <option value='Koza'>Koza</option>
                                <option value='Pamuk'>Pamuk</option>
                                <option value='Poliester'>Poliester</option>
                                <option value='Sintetika'>Sintetika</option>
                            </select>
                        </div>
                        <div className="detailsItem">
                            <p>Kategorija</p>
                            <select 
                            className="selectDetails"
                            value={category}
                            onChange={(e)=>setCategory(e.target.value)}>
                                <option value='Dukserice'>Dukserice</option>
                                <option value='Farmerice'>Farmerice</option>
                                <option value='Jakne'>Jakne</option>
                                <option value='Patike'>Patike</option>
                            </select>
                        </div>
                    </div>  
               <div className="btnContainer">
                    <button onClick={submitButtonHandler} type='button' className="submitBtnCreate">Potvrdi</button>
               </div>
            </div>
            <Newsletter />
            <Footer />
            <FooterInfo />
        </div>
    )
}

export default ProductCreate;