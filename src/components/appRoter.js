import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Register/Register'
import Auth from '../pages/Auth'

const AppRouter = () => {
    console.log('AppRouter')
    
    return (
        <Routes>
            <Route path={ '/register' } element={ <Register/> } exact={ true }/>
            <Route path={ '*' } element={ <Auth/> }/>
        </Routes>
    )
}

export default AppRouter
