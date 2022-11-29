import React, { useReducer, useContext } from 'react'

import reducer from './reducer'
import axios from 'axios'
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  LOGOUT_USER,
  LOGIN_USER,
  BEGIN,
  AUTH_SUCCESS,
  GET_SUCCESS,
  UPDATE_SUCCESS,
  DELETE_SUCCESS,
  CREATE_SUCCESS,
  ERROR,
  CHANGE_NAV_TITLE,
  SET_STAT,
  TOGGLE_MODEL,
  HANDLE_CHANGE,
  CLEAR_FILTERS,
} from './actions'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user || null,
  token: token,
  isEditing: false,
  stat: {},
  sort: 'latest',
  category: 'all',
  search: '',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
  categories: ['food', 'electronic', 'jewelry', 'clothes', 'utensils', 'sport'],
  nav: 'Dashboard',
  displayModel: false,
  numOfPages: 1,
  page: 1,
  products: [],
  totalProducts: 0,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // axios
  const authFetch = axios.create({
    baseURL: '/api',
  })
  // request

  authFetch.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = `Bearer ${state.token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  // response

  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      // console.log(error.response)
      if (error.response.status === 401) {
        logoutUser()
      }
      return Promise.reject(error)
    }
  )

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }
  const toggleModel = () => {
    dispatch({ type: TOGGLE_MODEL })
  }
  const loginUser = ({ user, token }) => {
    dispatch({ type: LOGIN_USER, payload: { user, token } })
    addUserToLocalStorage({ user, token })
  }
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    removeUserFromLocalStorage()
  }
  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', user)
    localStorage.setItem('token', token)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const setupUser = async ({ currentUser, alertText }) => {
    dispatch({ type: BEGIN })
    try {
      const { data } = await axios.post(`/api/auth/login`, currentUser)
      const { user, token } = data
      dispatch({
        type: AUTH_SUCCESS,
        payload: { alertText },
      })
      loginUser({ user, token })
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
  }

  const getProducts = async () => {
    const { page, search, category, sort } = state

    let url = `/products?page=${page}&category=${category}&sort=${sort}`
    if (search) {
      url = url + `&search=${search}`
    }
    dispatch({ type: BEGIN })
    try {
      const { data } = await authFetch(url)
      const { products, totalProducts, numOfPages } = data
      dispatch({
        type: GET_SUCCESS,
        payload: {
          products,
          totalProducts,
          numOfPages,
        },
      })
    } catch (error) {
      loginUser()
    }
    clearAlert()
  }
  const addProduct = async (product) => {
    dispatch({ type: BEGIN })
    try {
      await authFetch.post('/products', product)
      dispatch({ type: CREATE_SUCCESS })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  const updateProduct = async (product) => {
    dispatch({ type: BEGIN })
    try {
      await authFetch.patch('/products', product)
      dispatch({ type: UPDATE_SUCCESS })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  const deleteProduct = async (product) => {
    dispatch({ type: BEGIN })
    try {
      await authFetch.delete(`/products`)
      dispatch({ type: DELETE_SUCCESS })
    } catch (error) {
      logoutUser()
    }
    clearAlert()
  }
  const getStat = async () => {
    dispatch({ type: BEGIN })
    try {
      const { data } = await authFetch('/overview/stat')
      dispatch({
        type: SET_STAT,
        payload: { stat: data },
      })
    } catch (error) {
      logoutUser()
    }
    clearAlert()
  }
  const setNav = (choseOption) => {
    dispatch({
      type: CHANGE_NAV_TITLE,
      payload: {
        title: choseOption,
      },
    })
  }
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        logoutUser,
        handleChange,
        getProducts,
        getStat,
        setNav,
        toggleModel,
        addProduct,
        clearFilters,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
