// Validation rules
export const validationRules = {
  firstname: (value) => {
    if (!value) return 'First name is required';
    if (value.length < 2) return 'First name must be at least 2 characters';
    return '';
  },
  lastname: (value) => {
    if (!value) return 'Last name is required';
    if (value.length < 2) return 'Last name must be at least 2 characters';
    return '';
  },
  phone: (value) => {
    if (!value) return 'Phone is required';
    if (!/^\+?[\d\s-]{10,}$/.test(value)) return 'Please enter a valid phone number';
    return '';
  },
  email: (value) => {
    if (!value) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
    return '';
  },
  street1: (value) => {
    if (!value) return 'Street address is required';
    if (value.length < 5) return 'Please enter a complete street address';
    return '';
  },
  city: (value) => {
    if (!value) return 'City is required';
    if (value.length < 2) return 'Please enter a valid city name';
    return '';
  },
  'postal-code': (value) => {
    if (!value) return 'Postal code is required';
    if (!/^[\d\w\s-]{3,10}$/.test(value)) return 'Please enter a valid postal code';
    return '';
  },
};