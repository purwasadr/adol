import React, { useEffect, useState } from "react";

export default function RowTableCart({index, cart, checkedState, handleCheckboxChange, counts, handleCountsChange }) {
    // const [count, setCount] = useState(cart.count);

    // useEffect(() => {
    //     const inter = setInterval(() => {
    //         if (count > cart.product.stock) {
    //             setCount(cart.product.stock);
    //         } else if (count < 1) {
    //             setCount(1);
    //         }
    //         // handleCountsChange(index, count) 
    //     }, 300)
    //     return () => {
    //         clearInterval(inter);
    //     }
    // }, [count])

    return (
        <tr
           
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <input
                        id="checkbox-table-1"
                        type="checkbox"
                        checked={checkedState[index]}
                        onChange={() => handleCheckboxChange(index)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-table-1" className="sr-only">
                        checkbox
                    </label>
                </div>
            </td>
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
                {cart.product.name}
            </th>
            <td className="px-6 py-4 hidden sm:table-cell">
                {cart.product.price}
            </td>
            <td className="px-6 py-0">
                <div className="flex">
                    <button onClick={() => handleCountsChange(index, counts[index] - 1)} className="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        -
                    </button>
                    <input
                        type="number"
                        value={counts[index]}
                        onChange={(e) => handleCountsChange(index, e.target.value)}
                        className="block flex-1 min-w-[50px] w-full text-sm p-1  max-w-[100px] z-10 rounded-none bg-gray-50 border border-gray-300 text-gray-900 text-center focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <button onClick={() => handleCountsChange(index,counts[index] + 1)} className="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 rounded-r-md border border-l-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        +
                    </button>
                </div>
            </td>
            <td className="px-6 py-4 text-right">
                <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    Delete
                </a>
            </td>
        </tr>
    );
}
