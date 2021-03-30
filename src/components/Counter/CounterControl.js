import { useDispatch } from 'react-redux'
import { decreaseAction, increaseAction } from 'redux/storage/counter/counter'

const CounterControl = ({method, ...restProps}) => {
  const dispatch = useDispatch()

  const decrease = () => {
    dispatch(decreaseAction())
  }

  const increase = () => {
    dispatch(increaseAction())
  }

  return (
    <button type="button" onClick={method === 'dec' ? decrease : increase} {...restProps}></button>
  )
}

export default CounterControl