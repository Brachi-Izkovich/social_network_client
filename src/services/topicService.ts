import api from './api';
import { TopicType } from '../types/topic.types';

export const getTopics = async (): Promise<TopicType[]> => {
  const token = sessionStorage.getItem('token');
  const res = await api.get('/topic', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// הוספת נושא חדש לקטגוריה
export const addTopic = async (categoryId: number, title: string): Promise<TopicType> => {
  const token = sessionStorage.getItem('token');
  const formData = new FormData();
  formData.append('Id', '0');
  formData.append('CategoryId', categoryId.toString());
  formData.append('Title', title);
  const res = await api.post('/topic', formData, {
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
  });
  return res.data;
};
