import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import DropdownMeni from '../../components/HomeScreen/DropdownMeni';
import Header from '../../components/HomeScreen/Header';
import SocialInfo from '../../components/HomeScreen/SocialInfo';
import '../BrandScreen.css'
import slika1 from '../../assets/ckGrid.png'
import slika2 from '../../assets/ckGridB.png'
import slika3 from '../../assets/gridCkRight.png'
import Breadcrumb from '../../custom/Breadcrumb';
import { useDispatch, useSelector } from 'react-redux';
import {productsActions} from '../../store/products-slice';
import { fetchProductsData } from '../../store/products-actions';
import GenderFilter from '../ProductsNavigation/NavListComponents/GenderFilter';
import ColorFilter from '../ProductsNavigation/NavListComponents/ColorFilter';
import SeasonFIlter from '../ProductsNavigation/NavListComponents/SeasonFIlter';
import SizeFilter from '../ProductsNavigation/NavListComponents/SizeFilter';
import ProductsNav from '../ProductsNavigation/ProductsNav';

const filterItems = [
    {
        name: 'Boja'
    },
    {
        name: 'Velicina'
    },
    {
        name: 'Sezona'
    },
    {
        name: 'Pol'
    },
    {
        name: 'Cena'
    },
]

const BrandScreenCat = (props) => {

    const [show, setShow] = useState(false)
    const [showBtn, setShowBtn] = useState(false)
    const {nekibrend, kat} = useParams();
    const categoryProducts = useSelector(state => state.product.categoryProducts)
    const dispatch = useDispatch();

    const openSidebar = () => {
        setShow(!show)
      }

    useEffect(()=>{
        dispatch(fetchProductsData())
        dispatch(productsActions.findCategoryOfBrand(kat))
    },[dispatch])

    const breadcrumbList = [
        {name: 'Pocetna', to: '/'},
        {name: 'Brendovi', to: '/brendovi'},
        {name: nekibrend, to: '#'},
    ]

    const showChatButtonHandler = (el) =>{
        setShowBtn(el)
      }

    return(
        <div className="brandMainContainer">
            <SocialInfo />
            <Header showChatButton={showChatButtonHandler} />
            <DropdownMeni showSearchBtn={showBtn} />
            <Breadcrumb list={breadcrumbList} />
            <div className='brandDescription'>
                    <div className='insideDesc'>
                        <h1>{nekibrend}</h1>
                        <p>Opis brenda {nekibrend}</p>
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
                        type='category'
                        title={nekibrend}
                        closeSidebar={()=>setShow(false)}
                        onSpanMenuClick={openSidebar}
                        show={show}
                        value={kat}/>
                        <div className='listOfProducts'>
                           
                                <div className='arrayOfFilters'>
                                <h4>Trenutna kupovina po</h4>
                                <div className='insideArrayOfFilters'>
                                    <Link to={`/brendovi/${nekibrend}`} className='itemOfArray'>
                                        <span><b>Kategorija:</b> {kat}</span>
                                        <i id='itemOfArr'  className="fas fa-times"></i>
                                    </Link>
                                    <div className='itemOfArray'>
                                    <Link to={`/brendovi/${nekibrend}`}><span onClick={()=>dispatch(productsActions.backToInitalState())}>Ponistite sve</span></Link>    
                                    </div>
                                </div>
                            </div>
                            <div className='productItemsContainer'>
                            {
                                categoryProducts.map((obj, idx)=>{
                                    return(
                                        <div className='productItem' key={idx}>
                                            <img src={slika1} alt="" />
                                            <p>{obj.name}</p>
                                            <p>{obj.price}</p>
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
        </div>
    )
}

export default BrandScreenCat;