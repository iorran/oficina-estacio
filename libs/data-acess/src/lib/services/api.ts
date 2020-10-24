import axios from "axios";

export const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/iorran/db-palestra-estacio",
  headers:  {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    'Access-Control-Allow-Origin': '*'
  },
  withCredentials: true
});
