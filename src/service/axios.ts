import axios from 'axios';
import { INewsletter } from '../types/newsletter';

const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/marcosolvr/crbzapi'
});

export async function fetchData(url: string, signal: AbortSignal) {
  return await instance.get(url, { signal: signal });
}

export async function postNewsletter(url: string, body: INewsletter) {
  return await instance.post(url, body);
}