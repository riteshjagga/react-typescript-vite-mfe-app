import { render, screen } from '@testing-library/react'
import Account from './Account'

describe('Account MFE', () => {
  it('renders the Account component', () => {
    render(<Account />)
    const elements = screen.getAllByText(/Account/i)
    expect(elements[0]).toBeInTheDocument()
  })
})
