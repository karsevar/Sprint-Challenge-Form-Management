import React from 'react';

import FormikLoginForm from './Form';
import * as rtl from '@testing-library/react';
import {render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

describe('UserForm', () => {
    it('renders without crashing', () => {
        render(<FormikLoginForm />)
    })

    describe('submit button invoked', () => {
        it('should run when clicked', () => {
            const {getByTestId} = render(<FormikLoginForm />);
            const button = getByTestId('submit');
            fireEvent.click(button);
        })
    })
})
