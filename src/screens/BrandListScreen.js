
import './BrandListScreen.css'

import slika from '../assets/replayLogo.jpg';
import slika1 from '../assets/paciottiLogo.jpg';
import slika2 from '../assets/premiataLogo.jpg';
import slika3 from '../assets/tommyLogo.jpg';
import slika4 from '../assets/scotchLogo.jpg';
import slika5 from '../assets/levisLogo.jpg';
import slika6 from '../assets/ckLogo.jpg';
import slika7 from '../assets/disel.jpg';
import slika8 from '../assets/stevemaden.jpg';
import slika9 from '../assets/liujoLogo.jpg';
import slika10 from '../assets/guessLogo.jpg';

import { Link } from 'react-router-dom';
import SocialInfo from '../components/HomeScreen/SocialInfo';
import Header from '../components/HomeScreen/Header';
import DropdownMeni from '../components/HomeScreen/DropdownMeni';
import Newsletter from '../components/Newsletter';
import Footer from '../components/HomeScreen/Footer';
import FooterInfo from '../components/HomeScreen/FooterInfo';
import Breadcrumb from '../custom/Breadcrumb';


const brandsList = [
    {
        name: 'replay',
        slika: slika
    },
    {
        name: 'paciotti',
        slika: slika1
    },
    {
        name: 'premiata',
        slika: slika2
    },
    {
        name: 'tommy',
        slika: slika3
    },
    {
        name: 'scotch',
        slika: slika4
    },
    {
        name: 'levis',
        slika: slika5
    },
    {
        name: 'calvin klein',
        slika: slika6
    },
    {
        name: 'diesel',
        slika: slika7
    },
    {
        name: 'guess',
        slika: slika8
    },
    {
        name: 'liu jo',
        slika: slika9
    },
    {
        name: 'steve maden',
        slika: slika10
    },
]

const breadcrumbList = [
    {name: 'Pocetna', to: '/'},
    {name: 'Brendovi', to: '/brendovi'}
]

const BrandListScreen = () => {
    return (
        <div className='container'>
            <SocialInfo />
            <Header />
            <DropdownMeni />
            <Breadcrumb list={breadcrumbList} />
            <div className='titleCon'>
                <div className='insideTitleCon'>
                    <h2>BRENDOVI</h2>
                </div>
            </div>
            <div className='brandListCon'>
                <div className='insideBrandListCon'>
                    {brandsList.map((obj, idx)=>{
                        return(
                            <Link key={idx} to={`/brendovi/${obj.name}`} className='brandLinkCon'><img src={obj.slika} alt=''/></Link>
                        )
                    })}
                </div>
            </div>
            <Newsletter />
            <Footer />
            <FooterInfo />
        </div>
    )
}

export default BrandListScreen;