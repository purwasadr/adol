import React, { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import Button from '@/Components/Button';
import Auth from '@/Layouts/Auth';

export default function Login(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onSuccess: () => reset('password'),
            // onError: () => 
        });
    }

    return (
       <>
        <Head title="Login" />
        <Auth>
            <form onSubmit={submit}>
                <h1 className="text-center text-2xl font-semibold">Login</h1>
                <div className="mt-4">
                    <Label forInput="email">Email</Label>
                    <Input id="email" type="email" name="email" required={true} value={data.email} handleChange={onHandleChange} />
                    <div>{errors.password}</div>
                </div>

                <div className="mt-4">
                    <Label forInput="password">Password</Label>
                    <Input type="password" id="password" name="password" value={data.password} required={true} handleChange={onHandleChange}/>
                </div>

                <p className="mt-4 text-sm text-gray-900 dark:text-gray-300">Not registered? <Link href={route('register')} className="text-blue-600 hover:underline dark:text-blue-500">Register</Link></p>

                <Button className="mt-4">Login</Button>
            </form>
        </Auth>
       </>
    );
}
