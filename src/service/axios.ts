import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/marcosolvr/crbzapi'
});

export async function fetchData(url: string, signal: AbortSignal) {
  return await instance.get(url, { signal: signal });
}