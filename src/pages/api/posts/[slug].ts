import axios from 'axios';
const Cors = require('module-name');

import initMiddleware from '../../../common/utils/helpers/api/middleware';

const API_URL = process.env.API_URL as string;
const API_KEY = process.env.API_KEY as string;

const cors = initMiddleware(
  Cors({
    methods: ['GET'],
  }),
);

export default async (req: any, res: any) => {
  const {
    query: { slug },
  } = req;

  try {
    await cors(req, res);
    const { data } = await axios.get(
      `${API_URL}/search/v2/articlesearch.json?q=${slug}&${API_KEY}`,
    );
    res.json(data);
  } catch (error) {
    if (error.response.status === 429) {
      res.json({ status: 'Too Many Requests' });
    }
  }
};
