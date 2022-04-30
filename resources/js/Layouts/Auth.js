import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function Auth({ children }) {
    return (
        <div className="absolute flex flex-col justify-center top-0 bottom-0 left-1/2 -translate-x-1/2 max-w-sm w-full px-5">
            { children }
        </div>
    );
}