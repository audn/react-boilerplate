import axios from 'axios';

const API_URL = process.env.API_URL as string;
const API_KEY = process.env.API_KEY as string;

export default async (_req: any, res: any) => {
  try {
    const { data } = await axios.get(
      `${API_URL}topstories/v2/science.json?${API_KEY}`,
    );

    res.status(200).json(data);
  } catch (error) {
    switch (error.response.status) {
      case 429:
        return res.status(200).json({ status: 'Too Many Requests' });

      case 404:
        res.status(200).json({ status: 'Not found' });
    }
  }
};

// import axios from 'axios';
//
// const API_URL = process.env.API_URL as string;
// const API_KEY = process.env.API_KEY as string;
//
// export default async (req: any, res: any) => {
//   const {
//     query: { slug },
//   } = req;
//
//   try {
//     const { data } = await axios.get(
//       `${API_URL}search/v2/articlesearch.json?q=${slug}&${API_KEY}`,
//     );
//
//     res.status(200).json(data);
//   } catch (error) {
//     if (error.response.status === 429) {
//       res.status(200).json({ status: 'Too Many Requests' });
//     }
//   }
// };
