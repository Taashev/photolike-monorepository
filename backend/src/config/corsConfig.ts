import { CorsOptions } from 'cors';

const whiteList = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://photolike.taashev92.ru',
];

export const corsConfig: CorsOptions = {
  credentials: true,
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
  allowedHeaders: ['Content-Type'],
  origin: whiteList,
};
