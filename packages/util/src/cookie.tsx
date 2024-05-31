import React from 'react';
import { Cookies, CookiesProvider } from 'react-cookie';

interface Props {
  children: React.ReactNode;
}
const cookies = new Cookies();

export const CookiesProviderWrapper: React.FC<Props> = ({ children }) => {
  return <CookiesProvider>{children}</CookiesProvider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const setCookie = (name: string, value: string, options?: any) => {
  return cookies.set(name, value, {...options}); 
}

// eslint-disable-next-line react-refresh/only-export-components
export const getCookie = (name: string) => {
 return cookies.get(name); 
}

// eslint-disable-next-line react-refresh/only-export-components
export const removeCookie = (name: string, options?: any) => {
  return cookies.remove(name, {...options}); 
}


