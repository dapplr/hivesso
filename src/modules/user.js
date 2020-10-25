import api from "../helpers/api"

export const FETCH_USER_ERROR = 'user/fetch_user_error'
export const FETCHED_USER = 'user/fetched_user'
export const FETCH_USER = 'user/fetch_user'

const initialState = {
  userInputData: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        userInputData: {
          isFetching: true,
          hasFetched: false,
          hasErrors: false,
        }
      }

    case FETCHED_USER:
      return {
        ...state,
        userInputData: {
          ...state.userInputData,
          data: action.payload,
          isFetching: false,
          hasFetched: true,
          hasErrors: false,
        }
      }

    case FETCH_USER_ERROR:
      return {
        ...state,
        userInputData: {
          data: action.payload,
          isFetching: false,
          hasFetched: true,
          hasErrors: true,
        }
      }

    default:
      return state
  }
}

export const fetchUser = () => {
  return dispatch => {
    api.dispatchApiRequest({
      api: api.get({url: "https://jsonplaceholder.typicode.com/posts"}),
      dispatch,
      actions: [FETCHED_USER, FETCHED_USER, FETCH_USER_ERROR],
    })
  }
}
