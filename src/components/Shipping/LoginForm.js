import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="">
      <p className="text-sm text-gray-600 mb-4">
        If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to Billing.
      </p>

      <form className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="username">
            Username or Email <span className="text-red-500">*</span>
          </label>
          <input 
            id="username" 
            type="text" 
            name="username" 
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="password">
            Password <span className="text-red-500">*</span>
          </label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-col gap-3 max-w-sm">
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
          <Link 
            className="text-blue-500 text-sm text-center hover:underline" 
            to={'/lost-password'}
          >
            Lost your password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
