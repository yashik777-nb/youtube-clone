import {
  LOAD_PROFILE,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actionTypes";

const initialState = {
  accessToken: sessionStorage.getItem("ytc-y-accessToken")
    ? sessionStorage.getItem("ytc-y-accessToken")
    : null,
  user: sessionStorage.getItem("ytc-y-user")
    ? JSON.parse(sessionStorage.getItem("ytc-y-user"))
    : null,
  loading: false,
  error: null,
};

const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };
    case LOGIN_FAILED:
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };
    case LOGOUT:
      return {
        ...prevState,
        user: null,
        accessToken: null,
      };
    default:
      return {
        ...prevState,
      };
  }
};

export default authReducer;
