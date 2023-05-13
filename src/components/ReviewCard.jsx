import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid';

const ReviewCard = ({ data }) => {
    const date = new Date(data.created_at);
    return (
        <div className='flex items-start gap-5 p-10 shadow dark:shadow-gray-700 rounded-xl'>
            <div className='m-w-1/5'>
                {data.author_details.avatar_path
                    ? <img className="inline-block w-14 h-14 object-cover rounded-full" src={String(data.author_details.avatar_path).slice(1, String(data.author_details.avatar_path).length - 1)} alt="" />
                    : <div
                        className={`group text-2xl uppercase w-14 bg-red-500 font-medium text-white rounded-full aspect-square flex items-center justify-center`}
                    >
                        {data.author[0]}
                    </div>}
            </div>
            <div className='flex flex-col gap-3 w-4/5'>
                <div className='flex flex-col'>
                    <p className='text-2xl font-bold flex items-center gap-3'>
                        {data.author}
                        <span className='text-base flex items-center gap-1 bg-red-500 text-white pl-2 pr-3 py-[2px] rounded-lg'>
                            <StarIcon height={18} />
                            {data.author_details.rating}
                        </span>
                    </p>
                    <p>{`${date.toLocaleString("default", { month: "long" })} ${date.getDate()} ,${date.getFullYear()}`}</p>
                </div>
                <p>{data.content}</p>
            </div>
        </div>
    )
}

export default ReviewCard