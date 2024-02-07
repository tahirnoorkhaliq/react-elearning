import React from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import {  useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './adpr.style.css'

const AddProductFormik = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>ADD PRODUCT</h1>
            <Formik initialValues={{
                id: '',
                productName: '',
                quantity: '',
                price: ''
            }}
                validate={
                    values => {
                        const errors = {};
                        console.log("validate",errors);
                        console.log("values",values);
                        if (!values.productName) {
                            errors.productName = 'Required'
                        }
                        if (!values.quantity) {
                            errors.quantity = 'Required'
                        } else if (values.quantity <=0) {
                            errors.quantity = 'Quantity Should Greater than 0'
                        }
                        if (!values.price) {
                            errors.price = 'Required'
                        } else if (values.price <=0) {
                            errors.price = 'Quantity Should Greater than 0'
                        }
                        return errors;
                    }
                }
                onSubmit={(values, { setSubmitting }) => {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    values.id = nanoid();

                    axios.post('http://localhost:8000/products', JSON.stringify(values), {
                        headers: {
                            'content-type': 'application/json',
                        }
                    }).then((response) => {
                        console.log(response.data);
                        let path = '/products';
                        navigate(path);
                    });
                }}
                >
                {
                    ({ isSubmitting }) => (
                        <Form className='form-inline'>
                            <label htmlFor='productName'>Product Name</label>
                            <Field type="text" name="productName" />
                            <ErrorMessage name="productName" component="div" />
                            <label htmlFor='quantity'>Quantity</label>
                            <Field type="number" name="quantity" />
                            <ErrorMessage name="quantity" component="div" />
                            <label htmlFor='price'>price</label>
                            <Field type="number" name="price" />
                            <ErrorMessage name="price" component="div" />
                            <button type='submit' disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}

            </Formik>
        </div>
    )
}

export default AddProductFormik;


