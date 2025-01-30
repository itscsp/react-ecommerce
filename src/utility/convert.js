// this will convert dollor to ruppes
export const convertCurrency = (amount, exchangeRate=86) => {
    let currency = amount * exchangeRate;

    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(currency);
  };
  