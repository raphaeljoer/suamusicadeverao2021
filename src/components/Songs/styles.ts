import styled from 'styled-components';

interface SongProps {
  isMouseOver?: boolean;
}

export const Container = styled.main``;

export const SongsContainer = styled.ul`
  display: flex;
  flex-direction: column;

  max-width: 60rem;
  margin: 0 auto;
`;

export const Song = styled.li`
  list-style: none;
`;

export const SongContent = styled.a`
  display: flex;
  align-items: center;

  height: 8rem;

  margin-bottom: 0.8rem;
  margin-left: 0.8rem;
  margin-right: 0.8rem;

  border-radius: 0.8rem;

  text-decoration: none;

  color: ${(p) => p.theme.color.white.normal};
  background-color: ${(p) => p.theme.color.purple.light};

  transition: 0.2s ease-in-out background-color;
  transition: 0.2s ease-in-out transform;

  &:hover {
    background-color: ${(p) => p.theme.color.purple.lighter};
    transform: scale(1.03);
  }

  @media ${(p) => p.theme.breakpoint.tablet.midle} {
  }
`;

export const Position = styled.strong`
  margin: 0 1.2rem;
  font-size: 1.2rem;
  font-weight: bold;
  font-style: italic;
`;

export const Cover = styled.div<SongProps>`
  display: flex;
  flex-shrink: 0;

  position: relative;
  overflow: hidden;

  height: 4.4rem;
  width: 4.4rem;

  border-radius: 0.4rem;
`;

export const PlayIcon = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  z-index: 5;

  width: 100%;
  height: 100%;

  opacity: 0;

  ${SongContent}:hover & {
    opacity: 1;
  }

  background-color: rgba(0, 0, 0, 0.4);

  transition: 0.32s ease-in-out all;

  img {
    transform: scale(0.72);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: start;

  margin-left: 1.6rem;
  margin-right: 1.6rem;

  strong {
    font-size: 1rem;
    margin-bottom: 0.4rem;
    color: ${(p) => p.theme.color.yellow.normal};
    display: inline;
  }

  span {
    font-size: 1rem;
    color: ${(p) => p.theme.color.pink.normal};
  }
`;

export const Plays = styled.div`
  margin-left: auto;
  margin-right: 1.8rem;

  span {
    font-size: 1rem;
  }
`;
