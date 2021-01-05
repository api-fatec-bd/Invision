import React from 'react';
import { fireEvent,  render } from '@testing-library/react'
import Cadastro from './index';


describe('Tests for Cadastro form', () => {
    it('Testing Cadastro Form', async () => {
        const { getByTestId } = render(<Cadastro />)

        const nameInput = getByTestId('input-add-name');
        const emailInput = getByTestId('input-add-email');
        const passwordInput = getByTestId('input-add-password')

        expect(nameInput.value).toBe("");
        expect(emailInput.value).toBe("");
        expect(passwordInput.value).toBe("");


    })

    it('Should check if TextFields are right when button is clicked', () => {
        const { getByTestId } = render(<Cadastro />)

        const nameInput = getByTestId('input-add-name');
        const emailInput = getByTestId('input-add-email');
        const passwordInput = getByTestId('input-add-password')
        const form = getByTestId('form-add-cadastro')

        fireEvent.change(nameInput, { target: { value: 'Paulo Henrique' } })
        fireEvent.change(emailInput, { target: { value: 'paulofilipini@hotmail.com' } })
        fireEvent.change(passwordInput, { target: { value: '123456' } })
        fireEvent.click(form)
        expect(nameInput.value).toBe('Paulo Henrique');
        expect(emailInput.value).toBe('paulofilipini@hotmail.com');
        expect(passwordInput.value).toBe('123456');
    })
})