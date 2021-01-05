import React from 'react';
import { fireEvent, render } from '@testing-library/react'
import Login from './index';


describe('Tests for Login form', () => {
    it('Testing Login Form', async () => {
        const { getByTestId } = render(<Login />)

 
        const emailInput = getByTestId('email');
        const passwordInput = getByTestId('password')

        expect(emailInput.value).toBe("");
        expect(passwordInput.value).toBe("");


    })

    it('Should check if TextFields are right when button is clicked', () => {
        const { getByTestId } = render(<Login />)

        const emailInput = getByTestId('email');
        const passwordInput = getByTestId('password')
        const form = getByTestId('form-add-login')

        fireEvent.change(emailInput, { target: { value: 'paulofilipini@hotmail.com' } })
        fireEvent.change(passwordInput, { target: { value: '123456' } })
        fireEvent.click(form)
        expect(emailInput.value).toBe('paulofilipini@hotmail.com');
        expect(passwordInput.value).toBe('123456');
    })
})