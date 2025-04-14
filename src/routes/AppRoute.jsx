import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '../Layout/Layout'
import { ProductsList } from '../components/ProductsList'
import { ProductDetail } from '../components/ProductDetail'

export const AppRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<ProductsList />} />
                    <Route path='/productdetail/:id' element={<ProductDetail />} />
                </Route>
            </Routes>
        </Router>
    )
}
