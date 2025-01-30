import React from 'react';

const BillingDetails = () => {
  return (
    <div className="w-full">
      <h2 className="w-full text-2xl font-semibold uppercase mb-4">Billing Details</h2>
      <form className="w-full flex flex-col gap-4">
        
        <div className="w-full">
          <div className=" w-full flex flex-col">
            <label className="text-sm font-medium" htmlFor="firstname">
              First name <span className="text-red-500">*</span>
            </label>
            <input 
              id="firstname" 
              type="text" 
              name="firstname" 
              className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium" htmlFor="lastname">
              Last name <span className="text-red-500">*</span>
            </label>
            <input 
              id="lastname" 
              type="text" 
              name="lastname" 
              className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="phone">
            Phone <span className="text-red-500">*</span>
          </label>
          <input 
            id="phone" 
            type="text" 
            name="phone" 
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input 
            id="email" 
            type="text" 
            name="email" 
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="street1">
            Street Address <span className="text-red-500">*</span>
          </label>
          <input 
            id="street1" 
            type="text" 
            name="street1" 
            placeholder="Home Number and Street Name" 
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input 
            id="street2" 
            type="text" 
            name="street2" 
            placeholder="Apartment, Suite, Unit, etc." 
            className="border rounded-md p-2 mt-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="city">
            City <span className="text-red-500">*</span>
          </label>
          <input 
            id="city" 
            type="text" 
            name="city" 
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium" htmlFor="postal-code">
            Postal Code <span className="text-red-500">*</span>
          </label>
          <input 
            id="postal-code" 
            type="text" 
            name="postal-code" 
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
