import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Movies from './Main/Movies'
import Details from './Details/Details'

const MovieRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Movies />} />
            <Route path='/:movieId' element={<Details />} />
        </Routes>
    )
}

export default MovieRoutes