const NavTabs = ({navtabs:{name,icon}}) => {
    return (
        <div>
            <a href='#' className="mr-5 gap-2 flex hover:text-green-400 mx-1.5">
                {icon}
                <p className='border-b-4 border-transparent  hover:border-green-400'>{name}</p>
            </a>
        </div>
    )
}

export default NavTabs
