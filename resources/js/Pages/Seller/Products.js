import Seller from "@/Layouts/Seller";
import { Head, Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Products(props) {
    const products = props.products;
    return (
        <Seller>
            <Head title="Products"/>
            <div className="relative overflow-x-auto border sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">Sliver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4 text-right">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Edit
                                </a>
                            </td>
                        </tr>
                        { products.map((value, index) => {
                            return (
                                <tr key={value.id} className={ index !== products.length - 1 ? 'border-b ' : ""  + "dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"}>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                                    >
                                        {value.name}
                                    </th>
                                    <td className="px-6 py-4">Sliver</td>
                                    <td className="px-6 py-4">
                                       
                                    </td>
                                    <td className="px-6 py-4">{value.price}</td>
                                    <td className="px-6 py-4 text-right">
                                        <a
                                            href="#"
                                            className="font-medium text-blue-600 mr-4 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </a>
                                        <Link
                                            href={route('products.destroy', value.slug)}
                                            method="delete"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Seller>
    );
}
