import { combineReducers } from 'redux'


//产生user状态的 reducer
function xx(state = '', action) {
  switch (action.type) {
    case 'xx':
      return action.data
    default:
      return state
  }
}


export default combineReducers({
  xx
});