import React from 'react'
const video = process.env.PUBLIC_URL + '/1.png';
const play = process.env.PUBLIC_URL + '/Group 115.png';
const Watch = () => {
    return (
        <div className='mb-20 gap-5 relative flex flex-wrap justify-center'>
            
            <div><h1 className='relative font-semibold text-[40px] text-center mb-8'>Watch How We Design The Shoes.</h1></div>
            <div className='bg-[#9CE50933] w-[1010px] h-[310px] rounded-[50px]' style={{ position: 'absolute', top:'340px' }}></div>
            <div className='flex flex-wrap justify-center gap-5 relative items-center bg-[#D9D9D933] h-[510px] w-[962px] rounded-[50px]'>
            
                <img src={video} alt="" style={{ width: '850px', height: '450px', }} />
                <img src={play} alt="" style={{position:'absolute', top:'120px'}} />
            </div>

        </div>
    )
}

export default Watch
