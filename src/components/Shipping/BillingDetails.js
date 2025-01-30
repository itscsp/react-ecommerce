import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';


const BillingDetails = () => {
  const {
    shippingInfo,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContext(UserContext);

  const getInputClassName = (fieldName) => {
    const baseClasses = "border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none";
    return touched[fieldName] && errors[fieldName]
      ? `${baseClasses} border-red-500`
      : baseClasses;
  };

  return (
    <div className="w-full">
      <h2 className="w-full text-2xl font-semibold uppercase mb-4">Billing Details</h2>
      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="w-full">
          <div className="w-full flex flex-col">
            <label className="text-sm font-medium" htmlFor="firstname">
              First name <span className="text-red-500">*</span>
            </label>
            <input 
              id="firstname"
              type="text"
              name="firstname"
              value={shippingInfo.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClassName('firstname')}
            />
            {touched.firstname && errors.firstname && (
              <span className="text-red-500 text-sm mt-1">{errors.firstname}</span>
            )}
          </div>
          
          <div className="flex flex-col mt-4">
            <label className="text-sm font-medium" htmlFor="lastname">
              Last name <span className="text-red-500">*</span>
            </label>
            <input 
              id="lastname"
              type="text"
              name="lastname"
              value={shippingInfo.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClassName('lastname')}
            />
            {touched.lastname && errors.lastname && (
              <span className="text-red-500 text-sm mt-1">{errors.lastname}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="phone">
            Phone <span className="text-red-500">*</span>
          </label>
          <input 
            id="phone"
            type="tel"
            name="phone"
            value={shippingInfo.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName('phone')}
          />
          {touched.phone && errors.phone && (
            <span className="text-red-500 text-sm mt-1">{errors.phone}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input 
            id="email"
            type="email"
            name="email"
            value={shippingInfo.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName('email')}
          />
          {touched.email && errors.email && (
            <span className="text-red-500 text-sm mt-1">{errors.email}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="street1">
            Street Address <span className="text-red-500">*</span>
          </label>
          <input 
            id="street1"
            type="text"
            name="street1"
            value={shippingInfo.street1}
            placeholder="Home Number and Street Name"
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName('street1')}
          />
          {touched.street1 && errors.street1 && (
            <span className="text-red-500 text-sm mt-1">{errors.street1}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="city">
            City <span className="text-red-500">*</span>
          </label>
          <input 
            id="city"
            type="text"
            name="city"
            value={shippingInfo.city}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName('city')}
          />
          {touched.city && errors.city && (
            <span className="text-red-500 text-sm mt-1">{errors.city}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="postal-code">
            Postal Code <span className="text-red-500">*</span>
          </label>
          <input 
            id="postal-code"
            type="text"
            name="postal-code"
            value={shippingInfo['postal-code']}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName('postal-code')}
          />
          {touched['postal-code'] && errors['postal-code'] && (
            <span className="text-red-500 text-sm mt-1">{errors['postal-code']}</span>
          )}
        </div>

        <button 
          type="submit" 
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors mt-4"
        >
          Save Billing Details
        </button>
      </form>
    </div>
  );
};

export default BillingDetails;