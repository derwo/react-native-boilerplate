import * as actions from './actionTypes'

const initialState = {
  isAuthenticated: false,
  user: null,
  isLogging: false
}

const loginStart = state => {
  return {
    ...state,
    isLogging: true
  }
}

const loginSuccess = (state, action) => {
  return {
    ...state,
    user: action.user,
    isLogging: false,
    isAuthenticated: true
  }
}

const loginFail = (state, action) => {
  return {
    ...state,
    isLogging: false
  }
}

const logout = () => {
  return {
    ...initialState
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_LOGIN_START: return loginStart(state)
    case actions.AUTH_LOGIN_SUCCESS: return loginSuccess(state, action)
    case actions.AUTH_LOGIN_FAIL: return loginFail(state, action)
    case actions.AUTH_LOGOUT: return logout(state)
    default: return state
  }
}

export default reducer
