export type Views = {
  total: number;
};

export type Stock = {
  latestPrice: string;
  ytd: string;
  five: string;
  ten: string;
  twenty: string;
};

export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};

export type TopTracks = {
  tracks: Song[];
};

export type Team = {
  name: string;
  shortName: string;
  crest: string;
};

export type FootballCompetition = {
  name: string;
  code: string;
  emblem: string;
};

export type LiverpoolFixture = {
  homeTeam: Team;
  awayTeam: Team;
  competition: FootballCompetition;
  date: string;
};

export type Joke = {
  text: string;
};

export type DateHistory = {
  text: string;
};
