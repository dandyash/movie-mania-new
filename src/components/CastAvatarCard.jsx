import React from 'react'
import { IMAGE_PATH } from '../utils'
import { Link } from 'react-router-dom'

const CastAvatarCard = ({ data }) => {
    return (
        <div className='flex items-center gap-5'>
            <img className="inline-block w-14 h-14 object-cover rounded-full" src={IMAGE_PATH.ORIGINAL + data.profile_path} alt="" />
            <div className='flex flex-col gap-[2px]'>
                <Link to={`/person/${data.id}`} className='font-bold text-xl hover:text-red-500 transition'>{data.name}</Link>
                <p className='text-lg'>as <span className='capitalize font-medium text-red-500'>{data.character}</span></p>
            </div>
        </div>
    )
}

export default CastAvatarCard