import { FAbout, FAccount,GetHelp } from "./FooterComponents";

const foot = process.env.PUBLIC_URL + '/foot.png';
const Footer = () => {
    const getHelp = [
        {
            name: 'Order status',
            id: 1,
        },
        {
            name: 'Delivery',
            id: 2,
        },
        {
            name: 'Returns',
            id: 3,
        },
        {
            name: 'Payment options',
            id: 4,
        },
    ]
    const about = [
        {
            name: 'Send us feedback',
            id: 1,
        },
        {
            name: 'News',
            id: 2,
        },
        {
            name: 'Sustainability',
            id: 3,
        },
    ]
    const account = [
        {
            name: 'My account',
            id: 1,
        },
        {
            name: 'Order',
            id: 2,
        },
        {
            name: 'History',
            id: 3,
        },
        {
            name: 'Track order',
            id: 4,
        },
    ]
    const copywirte='@2023shoes,Inc.All reserved'
    return (
        <div>
            <footer className=" body-font" style={{ backgroundColor: '#e8e8e8', backgroundImage: `linear-gradient(45deg, #E8E8E8 37%, url(${foot}) 65%)` }}>
                <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className=" w-80 flex-shrink-0 text-center md:text-left mt-12 ml-14">
                        <p className="mt-2 text-sm font-normal text-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10  md:text-left text-center justify-end">
                        <div className=" w-[200px] px-4">
                            <h2 className="title-font font-medium tracking-widest text-base mb-3">Get Help</h2>
                            <nav className="list-none mb-10">
                                {getHelp.map(gethelp => {
                                    return (
                                        <div key={gethelp.id}><GetHelp gethelp={gethelp}/></div>
                                    )
                                })}
                            </nav>
                        </div>
                        <div className=" w-[200px] px-4">
                            <h2 className="title-font font-medium tracking-widest text-base mb-3">About</h2>
                            <nav className="list-none mb-10">
                                {about.map(About => {
                                    return (
                                        <div key={About.id}><FAbout About={About}/></div>
                                    )
                                })}
                            </nav>
                        </div>
                        <div className=" w-[200px] px-4">
                            <h2 className="title-font font-medium tracking-widest text-base mb-3">Account</h2>
                            <nav className="list-none mb-10">
                                {account.map(Account => {
                                    return (
                                        <div key={Account.id}><FAccount Account={Account}/></div>
                                    )
                                })}
                            </nav>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container mx-auto pb-6 px-5 flex flex-wrap justify-center gap-[700px]">
                        <div className=" text-base font-medium text-center sm:text-left">{copywirte}</div>
                        <div className="flex sm:mt-0 mt-2 mr-[100px] justify-end">
                            <a className="ml-3 text-base font-medium">
                                Guides
                            </a>
                            <a className="ml-16 text-base font-medium">
                                Terms of sales
                            </a>
                            <a className="ml-16 text-base font-medium">
                                Terms of use
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
