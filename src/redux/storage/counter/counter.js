const INCREMENT = '증가'
const DECREMENT = '감소'

export const increaseAction = () => ({
  type: INCREMENT
})

export const decreaseAction = () => ({
  type: DECREMENT
})

const initialState = {
  count: 0
}

export const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }
    case DECREMENT:
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}