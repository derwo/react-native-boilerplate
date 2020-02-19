import * as actions from './actionTypes'

export const login = ({ username }) => {
  return dispatch => {
    dispatch(loginStart())
    setTimeout(() => {
      dispatch(loginSuccess({
        username
      }))
    }, 1000)
  }
}

export const loginStart = () => {
  return {
    type: actions.AUTH_LOGIN_START
  }
}

export const loginSuccess = user => {
  return {
    type: actions.AUTH_LOGIN_SUCCESS,
    user
  }
}

export const loginFail = () => {
  return {
    type: actions.AUTH_LOGIN_FAIL
  }
}

export const logout = () => {
  return {
    type: actions.AUTH_LOGOUT
  }
}
