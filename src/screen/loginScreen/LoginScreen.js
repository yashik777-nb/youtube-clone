import React, { useEffect } from "react";
import "./_loginScreen.scss";

import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import * as actionCreators from "../../redux/actionCreatorsIndex";

function LoginScreen({ handleLogin }) {
  const accessToken = useSelector((state) => state.auth.accessToken);

  const onHandleLogin = () => {
    handleLogin();
  };

  const history = useHistory();

  useEffect(() => {
    // console.log("[USEEffect]", this.props, accessToken);
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt="Youtube"
          className="login__image"
        />
        <button onClick={onHandleLogin}>Login With Google</button>
        <p>This project is made using youtube data api</p>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     accessToken: state.auth.accessToken,
//   };
// };

const mapDispathToProps = (dispatch) => {
  return {
    handleLogin: () => dispatch(actionCreators.login()),
  };
};

export default connect(null, mapDispathToProps)(LoginScreen);
