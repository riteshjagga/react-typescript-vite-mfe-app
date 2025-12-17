import Button from '../components/Button/Button'

type CounterProps = {
  value: number
  onIncrement: (event: React.MouseEvent<HTMLButtonElement>) => void
  onDecrement: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Counter = ({ value, onIncrement, onDecrement }: CounterProps) => {
  return (
    <div>
      <p>Current Value: {value}</p>
      <div className="flex flex-row items-center gap-4">
        <Button onClick={onDecrement}>-</Button>
        <Button onClick={onIncrement}>+</Button>
      </div>
    </div>
  )
}

export default Counter
