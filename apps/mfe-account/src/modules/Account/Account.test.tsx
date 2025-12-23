import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Account from './Account';

describe('Account MFE', () => {
  it('renders the Account heading', () => {
    render(<Account />);
    expect(screen.getByText('Account')).toBeInTheDocument();
  });

  it('renders name and username input fields', () => {
    render(<Account />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('allows typing in input fields', async () => {
    render(<Account />);
    const user = userEvent.setup();

    const nameInput = screen.getByLabelText('Name');
    const usernameInput = screen.getByLabelText('Username');

    await user.clear(nameInput);
    await user.type(nameInput, 'John Doe');
    expect(nameInput).toHaveValue('John Doe');

    await user.clear(usernameInput);
    await user.type(usernameInput, 'johndoe');
    expect(usernameInput).toHaveValue('johndoe');
  });

  it('save button is clickable and enabled', async () => {
    render(<Account />);
    const user = userEvent.setup();

    const button = screen.getByRole('button', { name: /save changes/i });
    expect(button).toBeEnabled();

    await user.click(button);
  });
});
