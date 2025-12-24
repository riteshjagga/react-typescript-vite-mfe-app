import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const TestButton = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick}>Click me</button>
)

describe('Button', () => {
  it('renders text', () => {
    render(<TestButton onClick={() => {}} />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const onClick = jest.fn()

    render(<TestButton onClick={onClick} />)
    await user.click(screen.getByText('Click me'))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
