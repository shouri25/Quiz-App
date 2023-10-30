import axios from 'axios';
import {BASE_URL} from './HttpService';

export const axiosCient = axios.create({
  baseURL: BASE_URL,
});
