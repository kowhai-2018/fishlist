const defaultState = {
  error: null,
  loggedIn: false,
  newRegistration: false,
  pending: false
}

export default function authReducer (state = defaultState, { type, error }) {
  switch (type) {
    case 'LOGIN_PENDING':
    case 'REGISTER_PENDING':
      return {
        ...state,
        loggedIn: false,
        pending: true
      }

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        error: null,
        loggedIn: true,
        pending: false
      }

    case 'LOGIN_FAILURE':
    case 'REGISTER_FAILURE':
      return {
        ...state,
        error,
        loggedIn: false,
        pending: false
      }

    case 'REGISTER_SUCCESS':
      return {
        ...state,
        error: null,
        loggedIn: true,
        newRegistration: true,
        pending: false
      }

    default:
      return state
  }
}
