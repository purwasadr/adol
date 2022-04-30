import React, { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import Auth from "@/Layouts/Auth";

export default function Register(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, [])

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    }
    
    return (
        <>
            <Head title="Register" />
            <Auth>
                <h1 className="text-center text-2xl font-semibold">Register</h1>
                <form onSubmit={submit}>

                    <div className="mt-4">
                        <Label forInput="name">Name</Label>
                        <Input id="name" name="name" required={true} value={data.name} handleChange={onHandleChange} />
                    </div>

                    <div className="mt-4">
                        <Label forInput="email">Email</Label>
                        <Input id="email" name="email" required={true} value={data.email} handleChange={onHandleChange} />
                    </div>

                    <div className="mt-4">
                        <Label forInput="password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            required={true} 
                            value={data.password}
                            handleChange={onHandleChange}
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="password_confirmation">
                            Password confirmation
                        </Label>
                        <Input
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            required={true}
                            value={data.password_confirmation}
                            handleChange={onHandleChange}
                        />
                    </div>
                    <p className="mt-4 text-sm text-gray-900 dark:text-gray-300">
                        Already registered? <Link href={route('login')} className="text-blue-600 hover:underline dark:text-blue-500">Login</Link>
                    </p>

                    <Button className="mt-4" processing={processing}>Register</Button>
                </form>
            </Auth>
        </>
    );
}
