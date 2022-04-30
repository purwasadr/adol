import React from 'react';

export default function FileInput({
    id,
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
}) {
    return (
        <input
            className={
                "block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " +
                className
            }
            type="file"
            id={id}
            name={name}
            value={value}
            required={required}
            onChange={(e) => handleChange(e)}
        />
    );
}