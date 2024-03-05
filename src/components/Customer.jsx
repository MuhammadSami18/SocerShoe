const Customer = ({custom:{information,image}}) => {
    return (
        <div className=' w-[480px] h-[148px] border border-[#9CE509] rounded-[10px] bg-[#E8E8E8] justify-center items-center flex'>
            <div style={{ position: 'absolute', top: '-36px' }}>
                <img src={image} alt="1" className='w-[70px] h-[70px] rounded-full' />
            </div>
            <div className=' text-sm font-normal text-justify px-5 mt-6'>{information}</div>
        </div>
    )
}
export default Customer
