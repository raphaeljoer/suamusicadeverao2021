/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  Dispatch,
  useState,
  useCallback,
  useEffect,
} from 'react';

import { addSeconds, differenceInSeconds, isAfter, isBefore } from 'date-fns';

import { CountDown } from '@/components';

interface VoteContextProps {
  isAvailable?: boolean;
  setIsAvailable?: Dispatch<boolean>;

  isVoting?: boolean;
  setIsVoting?: Dispatch<boolean>;

  songChoiced?: string;
  setSongChoiced?: Dispatch<string>;

  lastVoteDate?: Date;
  setLastVoteDate?: Dispatch<Date>;

  dateToAvailable?: Date;
  setDateToAvailable?: Dispatch<Date>;

  countDown?: number;
  setCountDown?: Dispatch<number>;

  CountDown?: (time) => JSX.Element;

  setLastVoteDateToStorage?: Dispatch<void>;

  handleAvailability?: () => void;
}

const VoteContext = createContext<VoteContextProps>({});

const VoteProvider = ({ children }) => {
  const [countDown, setCountDown] = useState(null);
  const [songChoiced, setSongChoiced] = useState('');
  const [isVoting, setIsVoting] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [lastVoteDate, setLastVoteDate] = useState(null);
  const [dateToAvailable, setDateToAvailable] = useState(null);

  const setLastVoteDateToStorage = useCallback(() => {
    localStorage.setItem('@SuaMusica:LastVoteDate', String(new Date()));
  }, []);

  const getDateToAvailable = useCallback(() => {
    const date = new Date(localStorage.getItem('@SuaMusica:LastVoteDate'));
    const availableDate = addSeconds(date, 60);
    setDateToAvailable(availableDate);
    return availableDate;
  }, []);

  const handleAvailability = useCallback(() => {
    if (isBefore(Date.now(), getDateToAvailable())) {
      countDown <= 0 &&
        setCountDown(differenceInSeconds(getDateToAvailable(), new Date()));
    }

    if (isAfter(Date.now(), getDateToAvailable())) {
      setIsAvailable(true);
    }
  }, [getDateToAvailable]);

  useEffect(() => {
    console.log('isAvailable', isAvailable);
    const callTick = setInterval(handleAvailability, 1000);

    if (isAfter(Date.now(), getDateToAvailable())) {
      clearInterval(callTick);
    }

    if (isAvailable) {
      clearInterval(callTick);
    }

    return () => clearInterval(callTick);
  }, [isAvailable]);

  useEffect(() => {
    if (isBefore(Date.now(), getDateToAvailable())) {
      setIsAvailable(false);
    }
  }, []);

  return (
    <VoteContext.Provider
      value={{
        isAvailable,
        setIsAvailable,

        isVoting,
        setIsVoting,

        songChoiced,
        setSongChoiced,

        lastVoteDate,
        setLastVoteDate,

        dateToAvailable,
        setDateToAvailable,

        countDown,
        setCountDown,
        CountDown,

        handleAvailability,

        setLastVoteDateToStorage,
      }}
    >
      {children}
    </VoteContext.Provider>
  );
};

export { VoteContext, VoteProvider };
