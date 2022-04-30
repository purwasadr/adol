import React, { useEffect, useState } from 'react';
import { Head, usePage } from '@inertiajs/inertia-react'
import Main from '@/Layouts/Main';
import ButtonLink from '@/Components/ButtonLink';
import Button from '@/Components/Button';

export default function ProductDetail({ product }) {
    const { assetStorage, flash } = usePage().props;
    const [ count, setCount ] = useState(1);
    const [ hidden, setHidden ] = useState(true);

    useEffect(() => {
        const inter = setInterval(() => {
            if (count > product.stock) {
                setCount(product.stock);
            } else if (count < 1) {
                setCount(1);
            }
        }, 300)
        return () => {
            clearInterval(inter);
        }
    }, [count])
    

    return (
        <Main>
            <Head title={product.name} />
            {
                flash.error && (
                    <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                        <span class="font-medium">Cannot add cart!</span> cannot add same product to cart.
                    </div>
                )
            }
            <div className="sm:flex">
                <div className="sm:flex-grow sm:flex-shrink-0 sm:w-2/6">
                    <img className="shadow-lg rounded-lg aspect-square w-full object-cover" src={`${assetStorage}/${product.image}`} alt="" />
                </div>
                <div className="sm:flex-grow sm:flex-shrink-0 sm:w-4/6 pl-10">
                    <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
                    <h2 className="text-2xl font-semibold mt-4">{product.price}</h2>

                    <div className="flex mt-4">
                        <button onClick={() => setCount(count - 1)} className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            -
                        </button>
                        <input type="number" value={count} onChange={(e) => setCount(e.target.value)} className="max-w-[100px] z-10 rounded-none bg-gray-50 border border-gray-300 text-gray-900 text-center focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        <button onClick={() => setCount(count + 1)} className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-r-md border border-l-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            +
                        </button>
                    </div>

                    <div className="mt-4">
                        <Button type="button" className="mr-2" onClick={() => setHidden(!hidden)}>Buy Now</Button>
                        <ButtonLink href={route('cart.store', product.id)} method="post" data={{ count: count }}>Add To Cart</ButtonLink>
                    </div>
                </div>
            </div>
        </Main>
    );
}