import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pixabay.com/',

  });

  export default instance;