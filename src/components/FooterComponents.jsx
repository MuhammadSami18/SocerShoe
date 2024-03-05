import React from 'react'

export const FAccount = ({ Account: { name } }) => {
    return (
        <div>
            <li className='mb-2'>
                <a className=" text-sm font-medium">{name}</a>
            </li>
        </div>
    )
}

export const GetHelp = ({gethelp:{name}}) => {
    return (
        <div>
            <li className='mb-2'>
                <a className=" text-sm font-medium">{name}</a>
            </li>
        </div>
    )
}

export const FAbout = ({About:{name}}) => {
    return (
        <div>
            <li className='mb-2'>
                <a className=" text-sm font-medium">{name}</a>
            </li>
        </div>
    )
}
