import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  LOGOUT_USER,
  LOGIN_USER,
  BEGIN,
  AUTH_SUCCESS,
  GET_SUCCESS,
  UPDATE_SUCCESS,
  CREATE_SUCCESS,
  DELETE_SUCCESS,
  ERROR,
  CHANGE_NAV_TITLE,
  SET_STAT,
  TOGGLE_MODEL,
  HANDLE_CHANGE,
  CLEAR_FILTERS,
} from './actions'

import { initialState } from './appContext'

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!',
    }
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }
  if (action.type === TOGGLE_MODEL) {
    return {
      ...state,
      displayModel: !state.displayModel,
    }
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    }
  }
  if (action.type === LOGIN_USER) {
    return {
      ...initialState,
      user: action.payload.user,
      token: action.payload.token,
    }
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      page: 1,
      [action.payload.name]: action.payload.value,
    }
  }
  if (action.type === ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === AUTH_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    }
  }
  if (action.type === CREATE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    }
  }
  if (action.type === UPDATE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    }
  }
  if (action.type === DELETE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    }
  }
  if (action.type === GET_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      numOfPages: action.payload.numOfPages,
      products: action.payload.products,
      totalProducts: action.payload.totalProducts,
    }
  }
  if (action.type === SET_STAT) {
    return {
      ...state,
      isLoading: false,
      stat: action.payload.stat,
    }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      sort: 'latest',
      category: 'all',
      search: '',
    }
  }

  if (action.type === BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    }
  }
  if (action.type === CHANGE_NAV_TITLE) {
    return {
      ...state,
      nav: action.payload.title,
    }
  }
}
export default reducer
