import Button from '@/Components/Button';
import FileInput from '@/Components/FIleInput';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import Textarea from '@/Components/Textarea';
import Seller from '@/Layouts/Seller';
import { Head, useForm } from '@inertiajs/inertia-react';
import React, { useEffect } from 'react';


export default function AddProduct(props) {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        price: '',
        stock: '',
        description: '',
        image: ''
    })

    useEffect(() => {
        return () => {
           
        };
    }, [])

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.type === 'file' ? e.target.files[0] : e.target.value);
        // setData(e.target.name, e.target.value)
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('products.store'), {
            forceFormData: true,
            onError: (errors) => alert('Error')
        });
    }

    return (
        <Seller>
            <Head title='Add Product' />
            <h1 className="text-3xl font-bold">Add Product</h1>
            <form onSubmit={submit}>
                <div className="mt-4 max-w-4xl">
                    <Label forInput="name">Name</Label>
                    <Input id="name" name="name" required={true} value={data.name} handleChange={onHandleChange} />
                </div>
                <div className="mt-4 max-w-4xl">
                    <Label forInput="price">Price</Label>
                    <Input id="price" type="number" name="price" required={true} value={data.price} handleChange={onHandleChange} />
                </div>
                <div className="mt-4 max-w-4xl">
                    <Label forInput="stock">Stock</Label>
                    <Input id="stock" type="number" name="stock" required={true} value={data.stock} handleChange={onHandleChange} />
                </div>
                <div className="mt-4 max-w-4xl">
                    <Label forInput="description">Description</Label>
                    <Textarea id="description" name="description" required={true} value={data.description} handleChange={onHandleChange} />
                </div>
                <div className="mt-4 max-w-4xl">
                    <Label forInput="image">Upload Image</Label>
                    <FileInput id="image" name="image" required={true} handleChange={onHandleChange} />
                </div>
                <div className="flex max-w-4xl">
                    <Button className='mt-4 ml-auto'>Add Product</Button>
                </div>
            </form>
           
        </Seller>
    );
}