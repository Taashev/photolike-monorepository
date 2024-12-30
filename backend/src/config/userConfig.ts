import { regexpUrl } from '../utils/constants';

export const userConfig = {
  name: {
    minlength: 2,
    maxlength: 30,
    default: 'Анонимус',
  },
  about: {
    minlength: 2,
    maxlength: 200,
    default: 'Кто ты воин?',
  },
  avatar: {
    regexpUrl,
    default:
      'https://lastfm.freetls.fastly.net/i/u/ar0/409f50f3332df7627fe80c3900bfc74f.jpg',
  },
};
