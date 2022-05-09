import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import DropdownMeni from '../components/HomeScreen/DropdownMeni';
import Header from '../components/HomeScreen/Header';
import SocialInfo from '../components/HomeScreen/SocialInfo';
import CategoriesListFilter from '../custom/CategoriesListFilter';
import './BrandScreen.css'
import slika1 from '../assets/ckGrid.png'
import slika2 from '../assets/ckGridB.png'
import slika3 from '../assets/gridCkRight.png'
import Breadcrumb from '../custom/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProductsData} from '../store/products-actions'
import { productsActions } from '../store/products-slice';
import Newsletter from '../components/Newsletter';
import Footer from '../components/HomeScreen/Footer';
import FooterInfo from '../components/HomeScreen/FooterInfo';
import ProductsNav from './ProductsNavigation/ProductsNav';


const BrandScreen = (props) => {

    const [show, setShow] = useState(false)
    const [showBtn, setShowBtn] = useState(false)
    const products = useSelector(state => state.product.brandProducts)
    const dispatch = useDispatch();
    const title = useParams().nekibrend;

    const openSidebar = () => {
        setShow(!show)
      }

    const breadcrumbList = [
        {name: 'Pocetna', to: '/'},
        {name: 'Brendovi', to: '/brendovi'},
        {name: title, to: '#'},
    ]

    useEffect(()=>{
        dispatch(fetchProductsData());
        dispatch(productsActions.setBrandsProducts(title))
        dispatch(productsActions.backToInitalState())
    }, [dispatch])

    

    const showChatButtonHandler = (el) =>{
        setShowBtn(el)
      }

    return(
        <div className="brandMainContainer">
            <SocialInfo />
            <Header showChatButton={showChatButtonHandler}/>
            <DropdownMeni showSearchBtn={showBtn}/>
            <Breadcrumb list={breadcrumbList} />
            <div className='brandDescription'>
                    <div className='insideDesc'>
                        <h1>{title}</h1>
                        <p>Opis brenda {title}</p>
                    </div>
            </div>
            <div className='imageGrid'>
                <div className='insideGrid'>
                    <div className='leftGridImage'>
                        <img src={slika1} alt=''/>
                    </div>
                    <div className='rightGridImage'>
                        <div className='topRightGrid'>
                            <div className='topRightLeft'>
                                <img src={slika2} alt='' />
                            </div>
                            <div className='topRightRight'>
                                <img src={slika3} alt='' />
                            </div>
                        </div>
                        <div className='bottomRightGrid'>
                            <img src={slika1} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mainBrandContainer'>
                    <div className='brandTwoCol'>
                        <ProductsNav 
                        title={title} 
                        closeSidebar={()=>setShow(false)}
                        onSpanMenuClick={openSidebar}
                        show={show}
                        type=''
                        />
                        <div className='listOfProducts'>
                            <div className='productItemsContainer'>
                            {products.length === 0 && (
                                <h4>Trenutno nema dostupnih proizvoda!!!!</h4>
                            )}
                             {
                                products.map((obj, idx)=>{
                                    return(
                                        <div className='productItem' key={idx}>
                                            <img src={slika1} alt="" />
                                            <p>{obj.name}</p>
                                            {obj.size.map((obj, idx)=>{
                                                return(
                                                    <span key={idx}>{obj.size}</span>
                                                )
                                            })}
                                            {obj.discount !== 0 ? (
                                                <p className='oldprice'>{obj.price} RSD</p>
                                            ): (<p >{obj.price} RSD</p>)}
                                            {obj.discount !== 0 && (
                                            <p className='discountP'>{obj.price-(obj.price*obj.discount/100)} RSD</p>
                                            )}
                                        </div>
                                    )
                                })
                            } 
                            </div>
                        </div>
                    </div>
            </div>
            <Newsletter />
            <Footer />
            <FooterInfo />
        </div>
    )
}

export default BrandScreen;