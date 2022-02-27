import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import BrandListScreen from './screens/BrandListScreen';
import BrandScreen from './screens/BrandScreen';
import HomeScreen from './screens/HomeScreen';
import MensScreen from './screens/MensScreen';

const App = () => {

  return (
    <main className='main'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
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
