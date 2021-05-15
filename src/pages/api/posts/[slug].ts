import axios from 'axios';
const Cors = require('cors');

import initMiddleware from '../../../common/utils/helpers/api/middleware';

const API_URL = process.env.API_URL as string;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string;

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
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json({ status: error.response.status });
  }
};
