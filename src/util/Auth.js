import axios from "axios";

export default axios.create({
  baseURL: "https://us-central1-paper-579a4.cloudfunctions.net/api",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});
