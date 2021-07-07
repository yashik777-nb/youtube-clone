import React from "react";
import "./_loginScreen.scss";

function loginScreen() {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt="Youtube"
          className="login__image"
        />
        <button>Login With Google</button>
        <p>This project is made using youtube data api</p>
      </div>
    </div>
  );
}

export default loginScreen;
