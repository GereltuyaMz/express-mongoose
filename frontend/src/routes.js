import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Profile from "./pages/Profile";
import Category from './pages/Category';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import SignUp from './pages/SignUp';

const Router = () => {

  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/category' element={<Category />} />
      <Route path='/product' element={<Product />} />
      <Route path='/user' element={<User />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/addproduct' element={<AddProduct />} />
      <Route path='/editproduct/:id' element={<EditProduct />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default Router