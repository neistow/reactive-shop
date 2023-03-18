import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import FormikInput from './FormikInput';

interface CommentForm {
    name: string;
    email: string;
    comment: string;
}

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .max(40, 'Name must be no more than 40 characters')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    comment: Yup.string()
        .required('Comment is required'),
});


type CommentFormProps = {
    onCommentAdded: (val: string) => void;
}

const CommentForm = ({ onCommentAdded }: CommentFormProps) => {

    const initialValues: CommentForm = {
        name: '',
        email: '',
        comment: '',
    };

    const handleSubmit = (values: CommentForm, { resetForm }: FormikHelpers<CommentForm>) => {
        onCommentAdded(values.comment)
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <FormikInput label="Name" name="name" type="text" />

                    <FormikInput label="Email" name="email" type="email" />

                    <label htmlFor="comment">Comment</label>
                    <Field name="comment" as="textarea"/>
                    <ErrorMessage name="comment"/>

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default CommentForm;