import React from 'react';
import { Link, usePage } from "@inertiajs/inertia-react";

export default function SidebarItem({caption, href, pageName, icon }) {
    const { page } = usePage().props;
    return (
        <li>
            <Link href={href} className={`flex items-center p-2 text-base font-normal ${ page === pageName ? 'bg-blue-700' : 'hover:bg-gray-100' } text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700`}>
                <span className={`w-6 h-6 ${ page === pageName ? "text-white" : "text-gray-500" }  group-hover:text-gray-900 transition duration-75 dark:text-gray-400 dark:group-hover:text-white`}>{icon}</span>
                <span className={`ml-3 ${ page === pageName ? 'text-white' : '' }`}>{caption}</span>
            </Link>
        </li>
    );
}