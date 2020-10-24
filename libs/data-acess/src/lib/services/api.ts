import axios from "axios";

export const api = axios.create({
  baseURL: "http://my-json-server.typicode.com/iorran/db-palestra-estacio/"
});
