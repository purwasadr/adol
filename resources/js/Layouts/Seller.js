import ButtonLink from '@/Components/ButtonLink';
import { Link, usePage } from '@inertiajs/inertia-react';
import React from 'react';

export default function Seller({ children }) {
    const { auth, page } = usePage().props;

    return (
        <>
            <nav className="sticky top-0 z-10 bg-white border-gray-200 px-3 sm:px-4 py-2.5 border dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto">
                    <a href="https://flowbite.com" className="flex items-center">
                        <span className="text-xl font-semibold whitespace-nowrap dark:text-white">
                            Adol Seller
                        </span>
                    </a>
                    <div className="flex md:order-2">
                        { auth.user ? <ButtonLink type="button" href={route('logout')} method="post">Logout</ButtonLink> : (<ButtonLink type="button" href={route('login')}>Login</ButtonLink>) }
                    </div>
                    <div
                        className="hidden w-full md:block md:w-auto mr-auto ml-5"
                        id="mobile-menu"
                    >
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <a
                                    href={route('products.index')}
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page"
                                >
                                    Seller
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="flex relative flex-wrap md:flex-nowrap">
                <aside className="w-full md:w-64 static md:fixed md:h-full md:left-0 flex-shrink-0" aria-label="Sidebar">
                    <div className="h-full overflow-y-auto py-4 px-3 sm:px-4 bg-gray-50 border-r dark:bg-gray-800">
                        <ul className="space-y-2">
                            <li>
                                <Link href={route('products.index')} className={`flex items-center p-2 text-base font-normal ${ page === 'products.index' ? 'bg-blue-700' : 'hover:bg-gray-100' } text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700`}>
                                    <svg className={`w-6 h-6 ${ page === 'products.index' ? 'text-white' : 'text-gray-500' } group-hover:text-gray-900 transition duration-75 dark:text-gray-400 dark:group-hover:text-white`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                    <span className={`ml-3 ${ page === 'products.index' ? 'text-white' : '' }`}>Products</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={route('products.create')} className={`flex items-center p-2 text-base font-normal ${ page === 'products.create' ? 'bg-blue-700' : 'hover:bg-gray-100' } text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="ml-3">Add Product</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className="h-[1000px] flex-shrink-0 w-full md:pl-64">
                    <div className="px-3 sm:px-4 py-2">
                        { children }
                    </div>
                </div>
            </div> 
        </>
    );
}