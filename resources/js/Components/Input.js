import React, { useEffect, useRef } from "react";

export default function Input({
    type = "text",
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
                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " +
                className
            }
            type={type}
            id={id}
            name={name}
            value={value}
            autoComplete={autoComplete}
            required={required}
            onChange={(e) => handleChange(e)}
        />
    );
}
