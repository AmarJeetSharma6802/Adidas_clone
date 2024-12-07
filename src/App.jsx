import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom';
import ThirdHome from './pageComponent/home/ThirdHome';
import Layout from './Layout';
import Men from './pageComponent/men/Men';
import Women from './pageComponent/women/Women';
import Kid from './pageComponent/Kid/Kid';
import Sports from './pageComponent/Sports/Sports';
import SelectImage from './pageComponent/select-img/SelectImage';
import Cart from './pageComponent/reducer/Cart'
import SelectedmenImg from './pageComponent/select-img/SelectedmenImg';
import SelectedWomensImg from './pageComponent/select-img/SelectedWomensImg';
import SelectedHomeImg from './pageComponent/select-img/SelectedHomeImg';
import SelectedKidsImg from './pageComponent/select-img/SelectedKidImg';
// import CartForm from './pageComponent/reducer/CartForm';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element ={<ThirdHome />}/>
        <Route path= "men" element={<Men />}/>
        <Route path= "women" element={<Women />}/>
        <Route path= "kid" element={<Kid />}/>
        <Route path= "sports" element={<Sports />}/>
        <Route path= "/selectimage/:id" element={<SelectImage />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/selectedMenImg/:id" element={<SelectedmenImg />} />
        <Route path="/selectedWomensImg/:id" element={<SelectedWomensImg />} /> 
        <Route path="/selectedHomeImg/:id" element={<SelectedHomeImg />} /> 
        <Route path="/selectedKidsImg/:id" element={<SelectedKidsImg />} /> 
        {/* <Route path="/itemPacked" element={< CartForm/>} />  */}
        

      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
