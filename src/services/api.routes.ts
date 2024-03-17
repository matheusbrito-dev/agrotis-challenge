import { IFormInterface } from '../interfaces/form.interface';
import api from './api';

export async function getProperties() {
  try {
    const res = await api.get('/propriedades.json');
    return res.data;
  } catch (err) {
    console.error('getProperties failed: ', err);
  }
}

export async function getLabs() {
  try {
    const res = await api.get('/laboratorios.json');
    return res.data;
  } catch (err) {
    console.error('getLabs failed: ', err);
  }
}

export async function postForm(data: IFormInterface) {
  try {
    console.log('Post sended: ', data);
    // const response = await api.post('/form', data);
    // return response;
  } catch (error) {
    console.error('PostForm failed:', error);
    throw error;
  }
}
