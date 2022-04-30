import { usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import RowTableCart from "./RowTableCart";

export default function TableCart({ getCounts }) {
    const { carts } = usePage().props;
    const [checkedState, setCheckedState] = useState(
        Array(carts.length).fill(false)
    );
    const [counts, setCounts] = useState(
        Array(carts.length)
            .fill(0)
            .map((value, index) => carts[index].count)
    );

    useEffect(() => {
        const inter = setInterval(() => {
            counts.forEach((count, index) => {  
                if (count > carts[index].product.stock) {
                    const updatedCounts = counts.map((item, index2) => index2 === index ? carts[index].product.stock : item);

                    setCounts(updatedCounts);
                } else if (count < 1) {

                    const updatedCounts = counts.map((item, index2) => index2 === index ? 1 : item);

                    setCounts(updatedCounts);
                }
            })
            // handleCountsChange(index, count) 
        }, 300)
        return () => {
            clearInterval(inter);
        }
    }, [counts])

    // console.log(counts);
    function handleCheckboxChange(position) {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    }
    function handleCountsChange(position, value) {
        const updatedCounts = counts.map((item, index) =>
            index === position ? value : item
        );

        setCounts(updatedCounts);

        // console.log('counts-nya');
        // console.log(updatedCounts);
    }

    return (
        <div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="checkbox-all"
                                    className="sr-only"
                                >
                                    checkbox
                                </label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 hidden sm:table-cell"
                        >
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Count
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {carts.map((cart, index) => (
                        <RowTableCart
                            key={cart.id}
                            cart={cart}
                            index={index}
                            counts={counts}
                            checkedState={checkedState}
                            handleCheckboxChange={handleCheckboxChange}
                            handleCountsChange={handleCountsChange}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
