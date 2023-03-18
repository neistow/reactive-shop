import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .required('Required'),
    surname: Yup.string()
        .max(40, 'Surname must be no more than 40 characters')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .matches(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/,
            'Password must contain at least 1 capital letter and 1 non-letter character'
        )
        .required('Required'),
});

const RegistrationForm = () => {
    return (
        <Formik
            initialValues={{ name: '', surname: '', email: '', password: '' }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field name="name" />
                    <ErrorMessage name="name" />

                    <label htmlFor="surname">Surname</label>
                    <Field name="surname" />
                    <ErrorMessage name="surname" />

                    <label htmlFor="email">Email</label>
                    <Field name="email" />
                    <ErrorMessage name="email" />

                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" />

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default RegistrationForm;