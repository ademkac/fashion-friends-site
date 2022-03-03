import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import BrandListScreen from './screens/BrandListScreen';
import BrandScreen from './screens/BrandScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import GuestWishList from './screens/GuestWishList';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MensScreen from './screens/MensScreen';
import ProductInfoScreen from './screens/ProductInfoScreen';
import RegisterScreen from './screens/RegisterScreen';

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
          <Route path='/:productInfo' element={<ProductInfoScreen />}/>
          <Route path='/zene' element={<HomeScreen />}/>
          <Route path='/muskarci' element={<MensScreen />}/>
          <Route path='/deca' element={<HomeScreen />}/>
          <Route path='/brendovi' element={<BrandListScreen />} />
          <Route path='/brendovi/:nekibrend' element={<BrandScreen />} />
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
