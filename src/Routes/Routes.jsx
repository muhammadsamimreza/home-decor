import React from 'react'
import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root/Root'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Home from '../pages/Home/Home'
import Product from '../pages/Product/Product'
import ListProduct from '../pages/ListProduct/ListProduct'

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
            path: '/products',
            Component: Product
        },
        {
            path: '/list',
            Component: ListProduct
        },
      ]
    }
])

export default router