import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const teamId = 64; // liverpool team id
  const endpoint = `https://api.football-data.org/v4/teams/${teamId}/matches?status=SCHEDULED&limit=1`;
  const apiKey = process.env.FOOTBALL_DATA_API_KEY;
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'X-Auth-Token': apiKey,
    },
  });

  const data = await response.json();
  const nextMatch = data['matches'][0];
  const utcDate = nextMatch['utcDate'];
  const localDate = new Date(utcDate).toLocaleString();

  const dateStringSplit = localDate.split(':');
  const ampm = dateStringSplit[2].split(' ')[1];
  const formattedDate = `${dateStringSplit[0]}:${dateStringSplit[1]} ${ampm}`;
  const competition = nextMatch['competition'];
  const homeTeam = nextMatch['homeTeam'];
  const awayTeam = nextMatch['awayTeam'];

  return res.status(200).json({
    date: formattedDate,
    competition: competition,
    homeTeam: homeTeam,
    awayTeam: awayTeam,
  });
}
