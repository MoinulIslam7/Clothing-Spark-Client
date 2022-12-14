import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../../Assets/signup/signup.jpeg'
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    // if(token){
    //     navigate('/');
    // }




    const handleSignUp = (data) => {
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.status);
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => {
                setSignUpError(error.message)
            });
    }
    // save user in  database
    const saveUser = (name, email, status) => {
        const user = { name, email, status };
        fetch('https://clothing-spark-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
                navigate('/');
            })
    }

    return (
        <div className='lg:flex justify-center items-center'>
            <div>
                <img className='h-3/4' src={signup} alt="" />
            </div>
            <div className='w-96 p-7'>
                <h2 className='text-4xl font-bold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input {...register("name", {
                            required: "Name is required"

                        })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", {
                            required: "Email Address is required"

                        })} type="email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input required {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be six character or longer" }

                        })} type="password" className="input input-bordered w-full max-w-xs" />

                        <select className=' my-4 p-4' {...register("status", { required: true })}>
                            <option value="">Please Select Your Status..</option>
                            <option value="seller">Seller</option>
                            <option value="user">User</option>
                        </select>

                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    <input className='mt-6 btn btn-accent w-full' value="Sign Up" type="submit" />

                    {
                        signUpError &&
                        <p className='text-red-600'>{signUpError}</p>
                    }
                </form>
                <p className='text-center mt-2'>Already Have an Account? <Link className='text-secondary' to='/signup'>Login Here</Link></p>
            </div>
        </div>
    );
};

export default Signup;