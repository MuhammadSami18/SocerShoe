const Item = ({prod:{image,name,price}}) => {
    return (
        <div>
            <div className='w-64' style={{ height: '364px' }}>
                <div className='rounded-lg flex items-center justify-center' style={{ height: '300px', background: 'linear-gradient(180deg, #E4E4E4 0%, rgba(228, 228, 228, 0.473958) 51.56%, #E4E4E4 100%)' }}>
                    <img src={image} alt="image" />
                </div>

                <div className='flex mt-1'>
                    <div style={{ width: '90%' }}>
                        <h3 className=' text-lg font-medium'>{name}</h3>
                        <p className='font-medium'><span className='' style={{ color: '#777777' }}>Price: </span>{price}$</p>
                    </div>
                    <div>
                        <button className=' w-10 h-10 text-white rounded-md justify-center flex items-center my-2' style={{ backgroundColor: '#9CE509' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
