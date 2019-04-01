
export const update_state = (payload) => {
  return {
    type: 'UPDATE_STATE',
    payload
  }
}

// 异步的action
export function update_state_async() {
  return dispatch => {
    setTimeout(() => {
      dispatch(update_state())
    }, 2000)
  }
}
