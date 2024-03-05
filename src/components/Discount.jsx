import React from 'react'

const Discount = () => {
    const d1 = process.env.PUBLIC_URL + '/d1.jpg';
  return (
    <div className='flex flex-wrap mb-12'>
      <div className='w-[40%] h-[491px] flex justify-center items-center'  style={{background: 'linear-gradient(269.41deg, #84BCD0 0.07%, rgba(132, 188, 208, 0.28) 99.07%)'}}>
        <div>
            <h1 className=' text-[40px] font-semibold'>Get 50% Discount</h1>
            <h1 className=' text-4xl font-medium'>Athletic Shoes</h1>
            <button className=' px-2 rounded-[10px] bg-white w-40 h-10 font-medium text-xl mt-3'>$120 - Buy now</button>
        </div>
      </div>
      <div className='w-[60%] h-[491px]' style={{backgroundImage:`url(${d1})`,backgroundRepeat:'norepeat',backgroundSize:'cover'}}></div>

    </div>
  )
}

export default Discount
