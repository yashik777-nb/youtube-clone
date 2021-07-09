import firebaseApp from "firebase/app";
import auth from "../../firebase";
import {
  LOAD_PROFILE,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actionTypes";

export const login = () => async (dispath) => {
  console.log("[Login Dispatched]");
  try {
    dispath({
      type: LOGIN_REQUEST,
    });

    const provider = new firebaseApp.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

    const res = await auth.signInWithPopup(provider);

    const accessToken = res.credential.accessToken;

    const profile = {
      name: res.additionalUserInfo.profile.name,
      picture: res.additionalUserInfo.profile.picture,
    };

    // Session Storage
    sessionStorage.setItem("ytc-y-accessToken", accessToken);
    sessionStorage.setItem("ytc-y-user", JSON.stringify(profile));

    dispath({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });
    dispath({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log("[ErrorLogging In]", error.message);
    dispath({
      type: LOGIN_FAILED,
      payload: error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: LOGOUT,
  });
  sessionStorage.removeItem("ytc-y-accessToken");
  sessionStorage.removeItem("ytc-y-user");
};
