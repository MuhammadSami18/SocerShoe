import Customer from "./Customer"

const Testimonial = () => {
    const customer = [
        {
            id:1,
            image: process.env.PUBLIC_URL + '/customer.png',
            information: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
        },
        {
            id:1,
            image: process.env.PUBLIC_URL + '/customer.png',
            information: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
        },
        {
            id:1,
            image: process.env.PUBLIC_URL + '/customer.png',
            information: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
        },
    ]
    return (
        <div>
            <section className='mb-20'>
                <h1 className=' text-2xl font-medium text-center'>What Our Customer Says</h1>
                <p className=' text-base font-normal text-center mb-20'>Lorem Ipsum has been the industry's standard dummy text</p>
                <div className='flex flex-wrap justify-center gap-5 relative'>
                    {customer.map((custom) => {
                        return (
                            <div key={custom.id}><Customer custom={custom}/></div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Testimonial
