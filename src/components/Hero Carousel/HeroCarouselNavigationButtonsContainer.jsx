import React from 'react'
import PrevIcon from '../../assets/PrevIcon'
import NextIcon from '../../assets/NextIcon'
import { useSwiper } from 'swiper/react'

const HeroCarouselNavigationButtonsContainer = () => {
    const swiper = useSwiper();
    return (
        <div className='absolute bottom-0 left-0 flex items-center z-10 pl-10 pb-5 text-red-500'>
            <button onClick={() => { swiper.slidePrev() }}><PrevIcon /></button>
            <button onClick={() => { swiper.slideNext() }}><NextIcon /></button>
        </div>
    )
}

export default HeroCarouselNavigationButtonsContainer