import { API } from '../../../lib/interfaces';

export async function getCats(): Promise<API.Models.Cat[]> {
  const res = await fetch(`https://cataas.com/api/cats?tags=cute&limit=10`, {
    mode: 'no-cors',
  });
  return res.json();
}
