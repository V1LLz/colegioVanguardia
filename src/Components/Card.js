import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Card({
    type = 'homeNewsEvents',
    height = 'h-96',
    title = 'titulo ejemplo', 
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum metus eget lorem ultrices, et hendrerit diam bibendum. Praesent vel dui nec tellus pharetra blandit ut hendrerit sapien. Etiam sed velit a ligula tincidunt interdum. In hac habitasse platea dictumst. Aenean blandit elementum aliquam. Aenean nisi ligula, ultricies in risus quis, scelerisque laoreet enim. Fusce ac odio tellus. Phasellus non venenatis eros. ',
    imageUrl = 'https://iervanguardia.wordpress.com/wp-content/uploads/2012/03/432147_3060517265331_1035390897_32876302_1561847463_n12.jpg?w=300',
    url = ''
}
) {
    const navigate = useNavigate();
    switch (type) {
        case 'homeNewsEvents':
            return (
                <div className={`${height} shadow-[0_3px_5px_rgb(0,0,0,0.2)] mx-5 my-10 flex flex-col overflow-hidden hover:bg-slate-200 cursor-pointer`} onClick={()=> navigate(url)}>
                    <img className='h-2/3  w-full object-cover' src={imageUrl} alt={title} />
                    <div className='m-3 h-1/3 overflow-clip'>
                        <h4 className='text-2xl font-bold'>{title}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            )
        case 'news':
            return(
                <div className={`${height} shadow-[0_1px_5px_rgb(0,0,0,0.2)] flex overflow-hidden hover:bg-slate-200 cursor-pointer p-5`} onClick={()=> navigate(url)}>
                    <img className='h-full w-1/3 object-cover' src={imageUrl} alt={title} />
                    <div className='p-5 w-2/3 h-full overflow-clip flex flex-col'>
                        <h4 className='text-2xl font-bold'>{title}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            )
        case 'homeBanner':
            return(
            <div className='relative'>
                <div className='flex flex-col gap-4 absolute bottom-[10%] left-[10%] right-[10%] text-white z-10'>
                    <h2 className=' text-4xl font-bold'>{title}</h2>
                    <p>{description}</p>
                </div>
                    <img src={imageUrl} alt='imagen inicio' className='h-[80svh] w-full object-cover z-0'></img>
                    <div className='absolute inset-0 bg-transparent shadow-[inset_0px_-300px_100px_-100px_#2d3748] pointer-events-none'></div>
                </div>
            )
        default:
        break;
    }
}