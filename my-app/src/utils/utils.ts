import {
  GenreFromTheServer,
  GenreForClient,
  LevelNameFromTheServer,
  LevelNameForClient,
} from './const';

export const adaptLevelNameForClient = (level: string) => {
  switch (level) {
    case LevelNameFromTheServer.Easy:
      return LevelNameForClient.Easy;
    case LevelNameFromTheServer.Medium:
      return LevelNameForClient.Medium;
    case LevelNameFromTheServer.Hard:
      return LevelNameForClient.Hard;
    default:
      return LevelNameForClient.Unknown;
  }
};

export const adaptGenreTypeForClient = (type: string) => {
  switch (type) {
    case GenreFromTheServer.Adventures:
      return GenreForClient.Adventures;
    case GenreFromTheServer.Horror:
      return GenreForClient.Horror;
    case GenreFromTheServer.Mystic:
      return GenreForClient.Mystic;
    case GenreFromTheServer.Detective:
      return GenreForClient.Detective;
    case GenreFromTheServer.SciFi:
      return GenreForClient.SciFi;
    default:
      return GenreForClient.Unknown;
  }
};
