import axios from 'axios';

const API_URL = 'http://localhost:3000/auth'; // Make sure NestJS backend runs on port 3000

export const registerUser = async (data: { name: string; username: string; password: string }) => {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data;
};

export const loginUser = async (data: { username: string; password: string }) => {
  const response = await axios.post(`${API_URL}/login`, data);
  return response.data;
};

export const getProfile = async (token: string) => {
    const res = await fetch(`${API_URL}/auth/me`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
  };