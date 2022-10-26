import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const handleSubmit = event =>{
        event.preventDefault();
    }


    return (
        <div>
            <div className="w-full max-w-md p-8 space-y-3 rounded dark:bg-gray-900 dark:text-gray-100 mx-auto my-5">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block mb-2 text-sm">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <Link rel="noopener noreferrer" href="#">Forgot Password?</Link>
                        </div>
                    </div>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400 font-semibold">Login</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="space-y-4">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                        <FaGoogle className="w-5 h-5 fill-current"></FaGoogle>
                        <p>Login with Google</p>
                    </button>
                    <button aria-label="Login with GitHub" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                        <FaGithub className="w-5 h-5 fill-current"></FaGithub>
                        <p>Login with GitHub</p>
                    </button>
                </div>
                <p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
				<Link rel="noopener noreferrer" to="/register" className="hover:underline dark:text-violet-400">Sign up</Link>.
			    </p>
            </div>
        </div>
    );
};

export default Login;