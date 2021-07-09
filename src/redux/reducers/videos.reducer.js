import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from "../actionTypes";

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
  error: null,
};

export const homeVideosReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_VIDEOS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case HOME_VIDEOS_SUCCESS:
      return {
        ...prevState,
        videos: payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
      };
    case HOME_VIDEOS_FAIL:
      return {
        ...prevState,
        loading: false,
        nextPageToken: null,
        error: payload,
      };
    default:
      return {
        ...prevState,
      };
  }
};

export default homeVideosReducer;
