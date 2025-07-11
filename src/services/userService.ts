export const getPrivateUser = async (): Promise<UserType> => {
  const token = sessionStorage.getItem('token');
  const res = await api.get('/User/private', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const updateUser = async (id: number, data: Partial<UserType>) => {
  const token = sessionStorage.getItem('token');
  // שים לב: האות U גדולה בנתיב
  const res = await api.put(`/User/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
import api from './api';
import { UserType } from '../types/user.types';

export const getUsers = async (): Promise<UserType[]> => {
  const token = sessionStorage.getItem('token');
  const res = await api.get('/user', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const getUserById = async (id: number): Promise<UserType> => {
  const token = sessionStorage.getItem('token');
  // שים לב: האות U גדולה בנתיב
  const res = await api.get(`/User/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
