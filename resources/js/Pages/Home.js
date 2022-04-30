import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Main from '@/Layouts/Main';
import CardProduct from '@/Components/CardProduct';


export default function Home({ products }) {
    return (
       <Main>
        <Head title="Home" />
        <div className="flex flex-wrap gap-4">
            {
                products.map((product, index) => {
                    return (
                            <CardProduct key={product.id} product={product}  />
                    )
                })
            }
        </div>
       </Main>
    );
}
