import React, { useEffect, useState } from "react";
import DropdownMeni from "../components/HomeScreen/DropdownMeni";
import Footer from "../components/HomeScreen/Footer";
import FooterInfo from "../components/HomeScreen/FooterInfo";
import Header from "../components/HomeScreen/Header";
import SocialInfo from "../components/HomeScreen/SocialInfo";
import Newsletter from "../components/Newsletter";
import './ProductCreate.css'
import { useDispatch, useSelector } from "react-redux";
import DiscountRadioBruttons from "./admin-form-components/DiscountRadioBruttons";
import SelectBrandComponent from "./admin-form-components/SelectBrandComponent";
import CheckboxComponent from "./admin-form-components/CheckboxComponent";

const brands = [
    {name: 'Tommy Hilfiger'}, {name: 'Calvin Klein'}, {name: 'Diesel'}
]

const ProductCreate = () => {

    const dispatch = useDispatch()
/*     const brands = useSelector(state=>state.brand.brands)
 */ const [nameOfProduct, setNameOfProduct] = useState('')
    const [descriptionOfProduct, setDescriptionOfProduct] = useState('')
    const [brandSelect, setBrandSelect] = useState('Tommy Hilfiger')
    const [price, setPrice] = useState('')
    const [radioValue, setRadioValue] = useState('')
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
    
    const submitButtonHandler = () => {
        console.log("submit happende")
    }

    return(
        <div className="productCreateContainer">
            <SocialInfo />
            <Header />
            <DropdownMeni />
            <form className="insideProductCreate" onSubmit={submitButtonHandler}>
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
                   />  
               <div className="btnContainer">
                    <button type='submit' className="submitBtnCreate">Potvrdi</button>
               </div>
            </form>
            <Newsletter />
            <Footer />
            <FooterInfo />
        </div>
    )
}

export default ProductCreate;