import React from 'react'
import PageNotFoundBanner from '../assets/PageNotFoundBanner'

const PageNotFound = () => {
    return (
        <>
            <section className='flex justify-center items-center flex-col gap-10 py-[125px]'>
                <PageNotFoundBanner />
                <h1 className='font-black text-5xl'>404 Page Not Found</h1>
            </section>
        </>
    )
}

export default PageNotFound