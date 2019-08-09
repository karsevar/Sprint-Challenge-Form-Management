import React, {useEffect, useState} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function UserForm({values, errors, touched, status}) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        if(status) {
            setUsers([...users, status])
        }
    }, [status])
    
    return (
        <div className='container'>
            <Form>
                {touched.username && errors.username && <p className='error'>{errors.username}</p>}
                <Field type='text' name='username' placeholder='Username' />
                {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                <Field type='password' name='password' placeholder='password' />
                <button type='submit' data-testid='submit'>Submit!</button>
            </Form>
        </div>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || '',
            password: password || ''
        };
    },
    
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(6, 'Username needs to be more than 6')
            .max(15, 'Username can\'t go over 15 characters') 
            .matches(/[A-Z]/, 'Username needs to have at least one capital letter')
            .matches(/[0-9]/, 'Username needs at least one number.')
            .required(),
        password: Yup.string()
            .min(6, 'Username needs to be more than 6')
            .max(60, 'Username can\'t go over 60 characters') 
            .matches(/[A-Z]/, 'Username needs to have at least one capital letter')
            .matches(/[0-9]/, 'Username needs at least one number.')
            .matches(/[*.,&^%$#@!()><?/]/, 'Needs at least one special character')
            .required(),
    }),

    handleSubmit(values, {resetForm, setStatus}) {
        axios 
            .post('http://localhost:5000/api/register', values)
            .then(res => {
                resetForm();
                setStatus(res.config.data);
            })
    }
})(UserForm);

export default FormikLoginForm;