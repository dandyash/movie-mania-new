import { HeartIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='container mx-auto px-5 pt-10 pb-5 flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <Link to="/" className="flex items-center text-3xl uppercase">
                    <p className="text-red-500 font-black">movie</p>
                    <p className="font-light">mania</p>
                </Link>
                <a href='https://www.themoviedb.org' target='_blank' rel='noreferrer' className='w-40'><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TMDB Logo" /></a>
            </div>
            <div className='flex items-center justify-between'>
                <p className='flex items-center gap-2'>Made with <HeartIcon className='text-red-500' height={20} /> by Yash Dand</p>
                <p>Copyright © {new Date().getFullYear()} Movie-Mania</p>
            </div>
        </footer>
    )
}

export default Footer