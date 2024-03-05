import React from 'react'
const BestProduct = () => {
  const products = [
    {
      image: process.env.PUBLIC_URL + '/s1.png',
      cat: 'Firm Ground (FG)',
    },
    {
      image: process.env.PUBLIC_URL + '/s2.png',
      cat: 'Soft Ground (SG)',
    },
    {
      image: process.env.PUBLIC_URL + '/s3.png',
      cat: 'Indoor Court (IC)',
    },
    {
      image: process.env.PUBLIC_URL + '/s4.png',
      cat: 'Artificial Grass (AG)',
    },

  ]
  return (
    <div className='flex justify-center gap-20 flex-wrap' style={{ position: 'relative', left: '0px', top: '-50px' }}>
      {products.map((x) => {
        return (
          <div className='relative w-64 h-56 rounded-xl' style={{ background: 'linear-gradient(180deg, #E4E4E4 0%, rgba(228, 228, 228, 0.473958) 51.56%, #E4E4E4 100%)' }}>
            <img src={x.image} alt="" style={{ position: 'absolute', top: '-90px', }} />
            <div className='bg-white flex rounded-xl pr-1 pl-2 pt-2 pb-4 mx-4 mt-44 w-56 h-10 font-semibold'>
              <h1 style={{width:'85%'}}>{x.cat}</h1>
              <button className=' w-7 h-7 text-white rounded-md justify-center flex items-center' style={{ backgroundColor: '#9CE509'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BestProduct
