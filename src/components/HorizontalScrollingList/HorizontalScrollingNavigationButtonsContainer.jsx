import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

const HorizontalScrollingNavigationButtonsContainer = ({ swiperRef }) => {
    return (
        <div className='pl-1 transition-all duration-300 z-10 flex flex-col gap-2 rounded-l-xl text-red-500'>
            <button className='flex-1 bg-red-500 rounded-lg text-white' onClick={() => { swiperRef.current.swiper.isBeginning ? swiperRef.current.swiper.slideTo(swiperRef.current.swiper.slides.length - 1) : swiperRef.current.swiper.slidePrev() }}><ChevronLeftIcon height={40} /></button>
            <button className='flex-1 bg-red-500 rounded-lg text-white' onClick={() => { swiperRef.current.swiper.isEnd ? swiperRef.current.swiper.slideTo(0) : swiperRef.current.swiper.slideNext() }}><ChevronRightIcon height={40} /></button>
        </div>
    )
}

export default HorizontalScrollingNavigationButtonsContainer