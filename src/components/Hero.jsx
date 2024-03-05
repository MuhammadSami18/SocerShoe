import Navbar from './Navbar'
const Hero = () => {
    const hero = process.env.PUBLIC_URL + '/shoe.png';
    return (
        <div style={{ backgroundColor: '#fff7ff', backgroundImage: 'linear-gradient(138deg, #fff7ff 50%, #9ce509 51%)',height:'1100px' }}>
            <Navbar />
            <div className=" px-6 py-12 text-center md:px-12 lg:text-left">
                <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="flex items-center gap-4 lg:grid-cols-2">
                        <div className="lg:mt-0 pt-36">
                            <h1 className='text-xs font-bold md:text-4xl xl:text-5xl uppercase'>New Collection</h1>
                            <h1 className=" font-bold flex uppercase" style={{ fontSize: '120px' }}>
                                Best<br/>Shoes
                            </h1>
                            <button className="inline-flex items-center border-2 py-3 px-12 focus:outline-none text-white font-semibold rounded-3xl text-2xl mt-4 md:mt-0 gap-2" style={{ backgroundColor: '#9CE509',width:'284.97px', height:'69px' }}>
                                    <p>Go Shopping</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                                    </svg>
                            </button>
                        </div>
                        <div className="mb-12 lg:mb-0" style={{position:'absolute',top:'40px',left:'500px'}}>
                            <img src={hero}
                                className="w-full rounded-lg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
