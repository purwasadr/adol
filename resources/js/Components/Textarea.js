import React from 'react';

export default function Textarea({
    id,
    name,
    className = '',
    autoComplete,
    rows = 4,
    required,
    isFocused,
    handleChange,
    children
}) {
    return (
        <textarea
        className={
            "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " +
            className
        }
        id={id}
        name={name}
        rows={rows}
        autoComplete={autoComplete}
        required={required}
        onChange={(e) => handleChange(e)}
        >{children}</textarea>
    );
}