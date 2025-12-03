import { default as Button2 } from '../../components/Button/Button'
import { Button, buttonVariants } from '@workspace/shared/components/ui/button'

type CounterProps = {
  value: number
  onIncrement: (event: React.MouseEvent<HTMLButtonElement>) => void
  onDecrement: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Counter = ({ value, onIncrement, onDecrement }: CounterProps) => {
  console.log('buttonVariants', buttonVariants)

  return (
    <div>
      <p>Current Value: {value}</p>
      <div className="flex flex-row items-center gap-4">
        <Button2 onClick={onDecrement}>-</Button2>
        <Button2 onClick={onIncrement}>+</Button2>
      </div>
    </div>
  )
}

export default Counter
