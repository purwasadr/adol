import Navbar from '@/Components/Navbar';
import React from 'react';

export default function Main({ auth, children }) {
    return (
        <>
            <Navbar auth={auth} />
            <div className="container mx-auto my-4">
                { children }
            </div>
        </>
    );
};

