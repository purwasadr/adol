import React from 'react';

export default function Label({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ` + className}>
            {value ? value : children}
        </label>
    );
}
