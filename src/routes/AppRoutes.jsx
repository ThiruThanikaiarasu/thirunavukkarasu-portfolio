import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HeroComponent from './components/HeroComponent/HeroComponent'

const AppRoutes = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/' element={<HeroComponent />} />
                </Route>
            </Routes>
        </React.Fragment>
    )
}

export default AppRoutes