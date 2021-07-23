import axios from "axios";

export  const reqRaspApi= axios.create({
    baseURL: 'https://reqres.in/api'
});
