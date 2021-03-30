import { useSelector } from 'react-redux'

const CounterDisplay = () => {
  const count = useSelector((state) => state.counter.count)
  
  return (
    <div>
      {count}
    </div>
  )
}

export default CounterDisplay