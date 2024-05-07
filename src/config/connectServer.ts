import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import dotenv from 'dotenv';
dotenv.config();
import * as eResponse from './eResponse';
import { encodeQueryData, makeId } from '../utils/common';
import { isValidUrl, isEmptyObject } from '../utils/validation';
import { TIMEOUT, KEY_USER_STORAGE } from './constantTypes';

const connectServer = (config: AxiosRequestConfig) => {
  let headersDefault: any = {
    'Content-Type': 'application/json; charset=utf-8'
  };
  let headers: any = config.headers
    ? { ...headersDefault, ...config.headers }
    : headersDefault;
  headers.Authorization = gtka() || false;
  console.log(headers);
  return axios.create({
    headers: headers,
    timeout: config.timeout || TIMEOUT
  });
};

export const endpointAccess = (path: string): string => {
  const endpoint =
    process.env.VITE_API_PROD == 'true' // Kiểm tra biến môi trường
      ? process.env.VITE_API_PROD
      : process.env.VITE_API_DEV;
  return isValidUrl(path) ? path : `${endpoint}${path}`;
};

export const get = async (
  path: string,
  data: any = {},
  config: AxiosRequestConfig = {}
): Promise<any> => {
  try {
    const encode =
      typeof data === 'object' && !isEmptyObject(data)
        ? '?' + encodeQueryData(data)
        : '';
    path = path + encode;
    path = endpointAccess(path);
    const res: AxiosResponse<any> = await connectServer(config).get(path);

    if (typeof res.data !== 'object') {
      return eResponse._errorResquestNotFound(path);
    }

    if (res.data.code === 401) {
      return eResponse._errorUnauthorized();
    }

    return res.data;
  } catch (err) {
    console.log('catch api GET:', err);
    return eResponse._errorOnTryCatch(err);
  }
};

export const post = async (
  path: string,
  data: any = {},
  config: AxiosRequestConfig = {}
): Promise<any> => {
  try {
    path = endpointAccess(path);
    const res: AxiosResponse<any> = await connectServer(config).post(
      path,
      data
    );

    if (typeof res.data !== 'object') {
      return eResponse._errorResquestNotFound(path);
    }

    if (res.data.code === 401) {
      return eResponse._errorUnauthorized();
    }
    return res.data;
  } catch (err) {
    return eResponse._errorOnTryCatch(err);
  }
};

export const put = async (
  path: string,
  data: any = {},
  config: AxiosRequestConfig = {}
): Promise<any> => {
  try {
    path = endpointAccess(path);
    const res: AxiosResponse<any> = await connectServer(config).put(path, data);
    if (typeof res.data !== 'object') {
      return eResponse._errorResquestNotFound(path);
    }
    if (res.data.code === 401) {
      return eResponse._errorUnauthorized();
    }

    return res.data;
  } catch (err) {
    if (err === 'expireToken') return (window.location.href = '/');

    console.log('catch api PUT: ', err);
    return eResponse._errorOnTryCatch(err);
  }
};

export const deleted = async (
  path: string,
  data: any = {},
  config: AxiosRequestConfig = {}
): Promise<any> => {
  try {
    path = endpointAccess(path);
    const res: AxiosResponse<any> = await connectServer(config).delete(path, {
      data: data
    });
    if (typeof res.data !== 'object') {
      return eResponse._errorResquestNotFound(path);
    }
    if (res.data.code === 401) {
      return eResponse._errorUnauthorized();
    }

    return res.data;
  } catch (err) {
    console.log('catch api DELETE: ', err);
    return eResponse._errorOnTryCatch(err);
  }
};

export const removeUserStoreStore = (): void => {
  localStorage.removeItem(KEY_USER_STORAGE);
};

export const localEnUserStore = (str: string): void => {
  if (!str) {
    return;
  }
  localStorage.setItem(KEY_USER_STORAGE, str);
};

export const localDeUserStore = (str?: any): any => {
  if (!str) {
    str = localStorage.getItem(KEY_USER_STORAGE);
  }
  if (!str) {
    return {};
  }
  str = str.substring(7);
  str = str.substring(0, str.length - 9);
  try {
    const data: string = window.atob(str);
    return JSON.parse(data);
  } catch (error) {
    console.log('error string localDeUserStore', error);
    return {};
  }
};
const gtka = (): string | null => {
  let str: string | null = localStorage.getItem(KEY_USER_STORAGE);
  // let jd = localDeUserStore(str);
  // if (!jd || !jd.token_id) {
  //   return false;
  // }
  return str;
};
