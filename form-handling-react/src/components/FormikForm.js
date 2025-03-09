import React from 'react';
import { useFormik } from 'formik';

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) errors.username = 'Username is required';
      if (!values.email) errors.email = 'Email is required';
      if (!values.password) errors.password = 'Password is required';
      return errors;
    },
    onSubmit: (values) => {
      console.log('Form Submitted', values);
      // Handle form submission, e.g., API call
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username && (
          <div>{formik.errors.username}</div>
        )}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div>{formik.errors.email}</div>
        )}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <div>{formik.errors.password}</div>
        )}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default FormikForm;
