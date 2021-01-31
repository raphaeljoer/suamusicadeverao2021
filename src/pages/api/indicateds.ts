import { NowRequest, NowResponse } from '@vercel/node';

export default async (request: NowRequest, response: NowResponse) => {
  const IndicatedList = [
    {
      id: 'TarcisioMeiaNoite',
      title: 'Meia Noite (você tem meu whatsapp)',
      artist: 'Tarcisio do Acordeon',
      imageUrl: '/images/indicated/tarcisio.jpg',
    },
    {
      id: 'TarcisioMeiaNoite2',
      title: 'Meia Noite (você tem meu whatsapp)',
      artist: 'Tarcisio do Acordeon',
      imageUrl: '/images/indicated/tarcisio.jpg',
    },
    {
      id: 'TarcisioMeiaNoite3',
      title: 'Meia Noite (você tem meu whatsapp)',
      artist: 'Tarcisio do Acordeon',
      imageUrl: '/images/indicated/tarcisio.jpg',
    },
  ];

  response.status(201).json({
    IndicatedList,
  });
};
