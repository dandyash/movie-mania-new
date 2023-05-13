import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Movies from './Main/Movies'

const MovieRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Movies />} />
        </Routes>
    )
}

export default MovieRoutes