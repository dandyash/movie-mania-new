import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Movies from './Main/Movies'
import Details from './Details/Details'
import MovieCast from './Cast/MovieCast'

const MovieRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Movies />} />
            <Route path='/:movieId' element={<Details />} />
            <Route path='/:movieId/cast' element={<MovieCast />} />
        </Routes>
    )
}

export default MovieRoutes