import { NowRequest, NowResponse } from '@vercel/node';

export default async (request: NowRequest, response: NowResponse) => {
  const apiUrl = process.env.API_URL;
  const secondsInDay = 86400;

  const songsListData = await fetch(apiUrl);
  const songsListDataJson = await songsListData.json();

  const getFirst50 = (_, index: number) => index < 50;

  const convertPlaysToNumber = (song) => ({
    ...song,
    plays: Number(song.plays),
  });

  const songs = songsListDataJson.filter(getFirst50).map(convertPlaysToNumber);

  response.setHeader(
    'Cache-Control',
    `s-maxage=${secondsInDay}, stale-while-revalidate`,
  );

  return response.json({
    songs,
  });
};
