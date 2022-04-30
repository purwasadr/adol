import ButtonLink from "@/Components/ButtonLink";
import TableCart from "@/Components/Cart/TableCart";
import Main from "@/Layouts/Main";
import React from "react";

export default function Cart({ carts }) {
    const getCounts = (counts) => {
        return counts();
    }

    return (
        <Main>
            <h1 className="text-3xl font-bold">Cart</h1>
            <TableCart getCounts={(counts) => {
                console.log(counts);
            }} />
            <div className="flex justify-end">
                <ButtonLink className="mt-4">Checkout</ButtonLink>
            </div>
        </Main>
    );
}
