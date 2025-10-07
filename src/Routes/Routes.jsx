import React from 'react'
import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root/Root'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Home from '../pages/Home/Home'
import AllProduct from '../pages/AllProduct/AllProduct'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import WishList from '../pages/WishList/WishList'

const router = createBrowserRouter([
    {
      path: '/',
      Component: Root,
      errorElement: <ErrorPage/>,
      children:[
        {
            index: true,
            path: '/',
            Component: Home
        },
        {
            path: '/allproducts',
            Component: AllProduct
        },
        {
            path: '/productdetails/:id',
            Component: ProductDetails
        },
        {
            path: '/wishlist',
            Component: WishList
        },
      ]
    }
])

export default router