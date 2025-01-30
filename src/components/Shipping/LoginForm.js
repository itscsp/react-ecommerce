import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';


const LoginForm = () => {
  const { 
    handleLogin, 
    handleLoginChange, 
    userInfo, 
    isLoading, 
    loginError,
    isLoggedIn
  } = useContext(UserContext);

  return (
    <div className={isLoggedIn ? 'hidden' : ''}>
      <p className="text-sm text-gray-600 mb-4">
        If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to Billing. <br/>
        Try following username and password for testing <code>U: johnd</code>, <code>PW: m38rmF$</code>
      </p>
      

      <form className="space-y-4" onSubmit={handleLogin}>
        {loginError && (
          <div className="text-red-500 text-sm mb-4">
            {loginError}
          </div>
        )}

        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="username">
            Username or Email <span className="text-red-500">*</span>
          </label>
          <input 
            id="username" 
            type="text" 
            name="username" 
            value={userInfo.username}
            onChange={handleLoginChange}
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
            value={userInfo.password}
            onChange={handleLoginChange}
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-col gap-3 max-w-sm">
          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full bg-blue-600 text-white py-2 rounded-md transition
              ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
          >
            {isLoading ? 'Logging in...' : 'Login'}
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