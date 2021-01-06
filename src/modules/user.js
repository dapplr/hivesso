import hive from "@hiveio/hive-js";

export const FETCH_USER_ERROR = "user/fetch_user_error";
export const FETCHED_USER = "user/fetched_user";
export const FETCH_USER = "user/fetch_user";
export const USERNAME_INPUT = "user/username_input";

const initialState = {
  userInputData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERNAME_INPUT:
      return {
        ...state,
        userInputData: {
          ...state.userInputData,
          inputValue: action.payload,
          isFetching: action.payload && true,
        },
      };
    case FETCH_USER:
      return {
        ...state,
        userInputData: {
          ...state.userInputData,
          isFetching: true,
          hasFetched: false,
          hasErrors: false,
        },
      };

    case FETCHED_USER:
      return {
        ...state,
        userInputData: {
          ...state.userInputData,
          isFetching: false,
          hasFetched: true,
          hasErrors: !Boolean(action.payload),
        },
        data: action.payload,
      };

    case FETCH_USER_ERROR:
      return {
        ...state,
        data: action.payload,
        userInputData: {
          ...state.userInputData,
          isFetching: false,
          hasFetched: true,
          hasErrors: true,
        },
      };

    default:
      return state;
  }
};
let userInputTimeout;
export const onUserInput = ({ username }) => {
  return (dispatch) => {
    dispatch({
      type: USERNAME_INPUT,
      payload: username,
    });
    if (username) {
      clearTimeout(userInputTimeout);
      userInputTimeout = setTimeout(() => {
        console.log("fired");
        dispatch(fetchUser({ username: username }));
      }, 400);
    }
  };
};

export const fetchUser = ({ username }) => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER });
    hive.api.getAccounts([username], function (err, response) {
      if (err) {
        dispatch({ type: FETCH_USER_ERROR, payload: err });
      }
      dispatch({
        type: FETCHED_USER,
        payload: (response.length && response[0]) || null,
      });
    });
    // api.dispatchApiRequest({
    //   api: () => new Promise((resolve, reject) => {}),
    //   dispatch,
    //   actions: [FETCHED_USER, FETCHED_USER, FETCH_USER_ERROR],
    // });
  };
};
