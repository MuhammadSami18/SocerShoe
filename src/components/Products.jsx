import React from 'react'
import Item from './Item';

const Products = () => {
    const products = [
        {
            prodId:1,
            image: process.env.PUBLIC_URL + '/p1.png',
            name: 'Red Snekers',
            price: 60
        },
        {
            prodId:2,
            image: process.env.PUBLIC_URL + '/p2.png',
            name: 'Green Snekers',
            price: 10
        },
        {
            prodId:3,
            image: process.env.PUBLIC_URL + '/p3.png',
            name: 'White Snekers',
            price: 15
        },
        {
            prodId:4,
            image: process.env.PUBLIC_URL + '/p4.png',
            name: 'Black Long Snekers',
            price: 26
        },
        {
            prodId:5,
            image: process.env.PUBLIC_URL + '/p5.png',
            name: 'Light Color Joger',
            price: 20
        },
        {
            prodId:6,
            image: process.env.PUBLIC_URL + '/p6.png',
            name: 'Dark Color Joger',
            price: 70
        },
        {
            prodId:7,
            image: process.env.PUBLIC_URL + '/p7.png',
            name: 'Red Long Snekers',
            price: 100
        },
        {
            prodId:8,
            image: process.env.PUBLIC_URL + '/p8.png',
            name: 'Black Snekers',
            price: 80
        },
    ];
    return (
        <section>
            <h1 className=' text-4xl font-medium mb-12' style={{ marginLeft: '135px' }}>New Arrivals</h1>
            <div className='flex justify-center flex-wrap gap-24 mb-6'>
                {
                    products.map(prod => {
                        return (
                            <div key={prod.prodId}><Item prod={prod}/></div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Products
