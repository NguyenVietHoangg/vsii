import React from 'react';
import { render, fireEvent, screen, act, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for better assertions
import TestForm from './TestForm';

describe('TestForm component', () => {
  it('renders the form correctly', () => {
    render(<TestForm />);

    expect(screen.getByText('Test Form')).toBeInTheDocument();
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Age:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('displays required error messages on submit when fields are empty', async () => {
    render(<TestForm />);

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    });

    const nameField = screen.getByLabelText('Name:').parentElement;
    const emailField = screen.getByLabelText('Email:').parentElement;
    const ageField = screen.getByLabelText('Age:').parentElement;

    if (nameField) {
      expect(
        await within(nameField).findByText('This field is required')
      ).toBeInTheDocument();
    }
    if (emailField) {
      expect(
        await within(emailField).findByText('This field is required')
      ).toBeInTheDocument();
    }
    if (ageField) {
      expect(
        await within(ageField).findByText('This field is required')
      ).toBeInTheDocument();
    }
  });

  it('displays email validation error message on invalid email', async () => {
    render(<TestForm />);

    await act(async () => {
      fireEvent.change(screen.getByLabelText('Email:'), {
        target: { value: 'Invalid email format' }
      });
      fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    });

    expect(await screen.findByText('Invalid email format')).toBeInTheDocument();
  });

  it('displays age validation error messages on invalid age', async () => {
    render(<TestForm />);

    await act(async () => {
      fireEvent.change(screen.getByLabelText('Age:'), {
        target: { value: '17' }
      });
      fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    });

    expect(
      await screen.findByText('Age must be at least 18')
    ).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(screen.getByLabelText('Age:'), {
        target: { value: '66' }
      });
      fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    });

    expect(
      await screen.findByText('Age must be at most 65')
    ).toBeInTheDocument();
  });

  it('calls the onSubmit function when form is valid', async () => {
    const mockSubmit = jest.fn();
    render(<TestForm onSubmit={mockSubmit} />);

    await act(async () => {
      fireEvent.change(screen.getByLabelText('Name:'), {
        target: { value: 'Viet Hoang' }
      });
      fireEvent.change(screen.getByLabelText('Email:'), {
        target: { value: 'nvhoangtb2k2@gmail.com' }
      });
      fireEvent.change(screen.getByLabelText('Age:'), {
        target: { value: '22' }
      });
      fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    });

    expect(mockSubmit).toHaveBeenCalledWith({
      username: 'Viet Hoang',
      email: 'nvhoangtb2k2@gmail.com',
      age: 22
    });
  });
});
