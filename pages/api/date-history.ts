import cache from 'memory-cache';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const endpoint = `http://numbersapi.com/${month}/${day}/date`;
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return res.status(200).json({
    text: data['text'],
  });
}
