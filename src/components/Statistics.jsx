const Statistics = () => {
    const stats = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="text-white w-12 h-12 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
            title: 'Secure Payment',
            details: 'Secure on order',
        },
        {
            icon: <svg class="text-white w-12 h-12 inline-block" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><rect x="4" y="13" rx="2" width="4" height="6" /><rect x="16" y="13" rx="2" width="4" height="6" /><path d="M4 15v-3a8 8 0 0 1 16 0v3" /><path d="M18 19a6 3 0 0 1 -6 3" /></svg>,
            title: '24/7 Support',
            details: 'Contact us 24 hrs a day',
        },
        {
            icon: <svg className="text-white w-12 h-12 inline-block" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /><path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /><line x1="3" y1="9" x2="7" y2="9" /></svg>,
            title: 'Fast Delivery',
            details: 'Fast Delivery on order',
        },
    ]
    return (
        <div className=' mt-0 mb-12' style={{ background: '#E7F9C480', gap: '580px' }}>
            <section className="text-gray-600 body-font">
                <div className="container py-2 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center justify-center gap-20">
                        {stats.map(x => {
                            return (
                                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                    <div className=" px-4 py-6 flex gap-6">
                                        <div className='w-20 h-20 rounded-md flex justify-center items-center' style={{ backgroundColor: '#9CE509' }}>{x.icon}</div>
                                        <div className=' text-left'>
                                            <h2 className="title-font font-medium text-3xl text-gray-900 pt-2">{x.title}</h2>
                                            <p className="leading-relaxed font-semibold">{x.details}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Statistics
