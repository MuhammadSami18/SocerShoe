import React, { useEffect, useState } from 'react';

const Slide = () => {
  const c1 = process.env.PUBLIC_URL + '/c1.png';
  const c2 = process.env.PUBLIC_URL + '/c2.png';
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlide(slideIndex);
  }, [slideIndex]);

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.add('hidden');
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('bg-[#9CE509]');
      dots[i].classList.add('bg-gray-300');
    }
    slides[slideIndex - 1].classList.remove('hidden');
    dots[slideIndex - 1].classList.remove('bg-gray-300');
    dots[slideIndex - 1].classList.add('bg-[#9CE509]');
  }

  return (
    <section className='mb-14'>
      <h1 className=' text-4xl font-medium mb-12 uppercase' style={{marginLeft:'135px'}}>Best Seller</h1>
      <div className=" flex flex-wrap items-center justify-center">
        <div className="slide relative flex flex-wrap justify-center gap-[220px]">
          <div className='relative w-[544px] h-[348px] flex' style={{ backgroundColor: '#9ce500', backgroundImage: 'linear-gradient(32deg, #9ce509 50%, #ffffff 51%)' }}>
            <div style={{ position: 'absolute', left: '-80px', top: '30px' }}><img src={c1} alt="" /></div>
            <div className='text-[32px] font-medium mt-4 ml-[350px] text-right'>
              TOP BASKETBALL SHOES
              <button className="inline-flex items-center py-3 px-5 focus:outline-none font-semibold rounded-3xl text-xs mt-4 md:mt-0 gap-2 w-[142.97px] h-[36px]" style={{ color: '#9CE509', border: '2px solid #9CE509' }}>
                <p className=' uppercase'>Shop Now</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div className='relative w-[544px] h-[348px] flex' style={{ backgroundColor: '#9ce500', backgroundImage: 'linear-gradient(328deg, #9ce509 50%, #ffffff 51%)' }}>
            <div className='text-[32px] font-medium mt-4 mr-[350px]'>
              TOP BASKETBALL SHOES
              <button className="inline-flex items-center py-3 px-5 focus:outline-none font-semibold rounded-3xl text-xs mt-4 md:mt-0 gap-2 w-[142.97px] h-[36px]" style={{ color: '#9CE509', border: '2px solid #9CE509' }}>
                <p className=' uppercase'>Shop Now</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div style={{ position: 'absolute', right: '-10px', top: '50px' }}><img src={c2} alt="" /></div>
          </div>

        </div>

        <div className="slide relative flex flex-wrap justify-center gap-[220px]">
          <div className='relative w-[544px] h-[348px] flex' style={{ backgroundColor: '#9ce500', backgroundImage: 'linear-gradient(32deg, #9ce509 50%, #ffffff 51%)' }}>
            <div style={{ position: 'absolute', left: '-80px', top: '30px' }}><img src={c1} alt="" /></div>
            <div className='text-[32px] font-medium mt-4 ml-[350px] text-right'>
              TOP BASKETBALL SHOES
              <button className="inline-flex items-center py-3 px-5 focus:outline-none font-semibold rounded-3xl text-xs mt-4 md:mt-0 gap-2 w-[142.97px] h-[36px]" style={{ color: '#9CE509', border: '2px solid #9CE509' }}>
                <p className=' uppercase'>Shop Now</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div className='relative w-[544px] h-[348px] flex' style={{ backgroundColor: '#9ce500', backgroundImage: 'linear-gradient(328deg, #9ce509 50%, #ffffff 51%)' }}>
            <div className='text-[32px] font-medium mt-4 mr-[350px]'>
              TOP BASKETBALL SHOES
              <button className="inline-flex items-center py-3 px-5 focus:outline-none font-semibold rounded-3xl text-xs mt-4 md:mt-0 gap-2 w-[142.97px] h-[36px]" style={{ color: '#9CE509', border: '2px solid #9CE509' }}>
                <p className=' uppercase'>Shop Now</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div style={{ position: 'absolute', right: '-10px', top: '50px' }}><img src={c2} alt="" /></div>
          </div>

        </div>

        <div className="slide relative flex flex-wrap justify-center gap-[220px]">
          <div className='relative w-[544px] h-[348px] flex' style={{ backgroundColor: '#9ce500', backgroundImage: 'linear-gradient(32deg, #9ce509 50%, #ffffff 51%)' }}>
            <div style={{ position: 'absolute', left: '-80px', top: '30px' }}><img src={c1} alt="" /></div>
            <div className='text-[32px] font-medium mt-4 ml-[350px] text-right'>
              TOP BASKETBALL SHOES
              <button className="inline-flex items-center py-3 px-5 focus:outline-none font-semibold rounded-3xl text-xs mt-4 md:mt-0 gap-2 w-[142.97px] h-[36px]" style={{ color: '#9CE509', border: '2px solid #9CE509' }}>
                <p className=' uppercase'>Shop Now</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div className='relative w-[544px] h-[348px] flex' style={{ backgroundColor: '#9ce500', backgroundImage: 'linear-gradient(328deg, #9ce509 50%, #ffffff 51%)' }}>
            <div className='text-[32px] font-medium mt-4 mr-[350px]'>
              TOP BASKETBALL SHOES
              <button className="inline-flex items-center py-3 px-5 focus:outline-none font-semibold rounded-3xl text-xs mt-4 md:mt-0 gap-2 w-[142.97px] h-[36px]" style={{ color: '#9CE509', border: '2px solid #9CE509' }}>
                <p className=' uppercase'>Shop Now</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div style={{ position: 'absolute', right: '-10px', top: '50px' }}><img src={c2} alt="" /></div>
          </div>

        </div>
      </div>
      <br />
      <div className="flex justify-center items-center space-x-5">
        <div className="dot w-4 h-4 rounded-full cursor-pointer" onClick={() => currentSlide(1)}></div>
        <div className="dot w-4 h-4 rounded-full cursor-pointer" onClick={() => currentSlide(2)}></div>
        <div className="dot w-4 h-4 rounded-full cursor-pointer" onClick={() => currentSlide(3)}></div>
      </div>
    </section>

  )
}

export default Slide