import React from 'react';
import { useField } from 'formik';
import { ErrorMessage } from 'formik';

interface FormikInputProps {
    label: string;
    name: string;
    type: string;
}

const FormikInput: React.FC<FormikInputProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={props.name}>{label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <ErrorMessage name={props.name} component="div" />
            ) : null}
        </div>
    );
};

export default FormikInput;