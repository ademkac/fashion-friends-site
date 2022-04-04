import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import BrandListScreen from './screens/BrandListScreen';
import BrandScreen from './screens/BrandScreen';
import BrandScreenCat from './screens/BrandScreenWithParams/BrandScreenCat';
import BrandScreenSize from './screens/BrandScreenWithParams/BrandScreenSize';
import BrandScreenColor from './screens/BrandScreenWithParams/BrandScreenColor';
import CheckoutCartScreen from './screens/CheckoutCartScreen';
import ChosenCatListScreen from './screens/ChosenCatListScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import GuestWishList from './screens/GuestWishList';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MensScreen from './screens/MensScreen';
import ProductInfoScreen from './screens/ProductInfoScreen';
import RegisterScreen from './screens/RegisterScreen';
import BrandScreenWithTwoFilters from './screens/BrandScreenWithParams/BrandScreenWithTwoFilters';
import BrandScreenSeason from './screens/BrandScreenWithParams/BrandScreenSeason';
import BrandScreenSex from './screens/BrandScreenWithParams/BrandScreenSex';
import ProductCreate from './admin-screens/ProductCreate';

const App = () => {

  return (
    <main className='main'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/customer/login' element={<LoginScreen />} />
          <Route path='/customer/register' element={<RegisterScreen />} />
          <Route path='/customer/forgotpassword' element={<ForgotPasswordScreen />}/>
          <Route path='/guestwishlist' element={<GuestWishList />}/>
          <Route path='/checkout/cart' element={<CheckoutCartScreen />} />
          <Route path='/:productInfo' element={<ProductInfoScreen />}/>
          <Route path='/zene' element={<HomeScreen />}/>
          <Route path='/muskarci' element={<MensScreen />}/>
          <Route path='/deca' element={<HomeScreen />}/>
          <Route path='/brendovi' element={<BrandListScreen />} />
          <Route path='/brendovi/:nekibrend' element={<BrandScreen />} />
          <Route path='/brendovi/:nekibrend/filter/category:kat' element={<BrandScreenCat />} />
          <Route path='/brendovi/:nekibrend/filter/size:size' element={<BrandScreenSize />} />
          <Route path='/brendovi/:nekibrend/filter/color:color' element={<BrandScreenColor />} />
          <Route path='/brendovi/:nekibrend/filter/season:season' element={<BrandScreenSeason />} />
          <Route path='/brendovi/:nekibrend/filter/sex:sex' element={<BrandScreenSex />} />
          <Route path='/brendovi/:nekibrend/filter/:first/:second' element={<BrandScreenWithTwoFilters />} />
          <Route path='/admin/create' element={<ProductCreate />} />
          <Route path='/zene/:odeca' element={<ChosenCatListScreen />} />
          <Route
        path="*"
        element={<Navigate to="/" />}
    />
        </Routes>
        
      </BrowserRouter>
    </main>
  );
}

export default App;
