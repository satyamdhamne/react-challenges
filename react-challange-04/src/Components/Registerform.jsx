import React, { useState } from "react";

function Registerform() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phoneno: '',
    email: '',
    password: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({
    fname: false,
    lname: false,
    phoneno: false,
    email: false,
    password: false
  });

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // First Name validation
    if (!formData.fname.trim()) {
      tempErrors.fname = 'First name is required';
      isValid = false;
    }

    // Last Name validation
    if (!formData.lname.trim()) {
      tempErrors.lname = 'Last name is required';
      isValid = false;
    }

    // Phone validation
    if (!formData.phoneno.trim()) {
      tempErrors.phoneno = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phoneno)) {
      tempErrors.phoneno = 'Please enter valid 10 digit number';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter valid email';
      isValid = false;
    }

    // Password validation
    if (!formData.password.trim()) {
      tempErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mark all fields as touched
    setTouched({
      fname: true,
      lname: true,
      phoneno: true,
      email: true,
      password: true
    });
    if (validateForm()) {
      setShowPopup(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
            Register Account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="fname" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                id="fname"
                name="fname"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your first name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.fname}
              />
              {errors.fname && touched.fname && (
                <p className="mt-1 text-sm text-red-600 font-semibold">{errors.fname}</p>
              )}
            </div>
            <div>
              <label htmlFor="lname" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                id="lname"
                name="lname"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your last name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.lname}
              />
              {errors.lname && touched.lname && (
                <p className="mt-1 text-sm text-red-600 font-semibold">{errors.lname}</p>
              )}
            </div>
            <div>
              <label htmlFor="phoneno" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phoneno"
                name="phoneno"
                type="tel"
                pattern="[0-9]{10}"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="+91 1234567890"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.phoneno}
              />
              {errors.phoneno && touched.phoneno && (
                <p className="mt-1 text-sm text-red-600 font-semibold">{errors.phoneno}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.email}
              />
              {errors.email && touched.email && (
                <p className="mt-1 text-sm text-red-600 font-semibold">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.password}
              />
              {errors.password && touched.password && (
                <p className="mt-1 text-sm text-red-600 font-semibold">{errors.password}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
              <h3 className="text-lg font-medium mb-4">Submitted Details</h3>
              <div className="space-y-2">
                <p><span className="font-bold">First Name:</span> {formData.fname}</p>
                <p><span className="font-bold">Last Name:</span> {formData.lname}</p>
                <p><span className="font-bold">Phone Number:</span> {formData.phoneno}</p>
                <p><span className="font-bold">Email:</span> {formData.email}</p>
                <p><span className="font-bold">Password:</span> {formData.password}</p>
              </div>
              <button 
                onClick={() => setShowPopup(false)}
                className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Registerform;
