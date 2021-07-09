import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyAqKNbse_Xfumc9w5m55p83kID2spsK-II",
  },
});

export default request;
