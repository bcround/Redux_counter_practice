import CounterControl from "./CounterControl"
import CounterDisplay from "./CounterDisplay"

const Counter = () => {
  return (
    <>
      <CounterControl method="dec">
        -
      </CounterControl>
      <CounterDisplay />
      <CounterControl method="inc">
        +
      </CounterControl>
    </>
  ) 
}

export default Counter