import { ReactComponent as IconAllQuests } from '../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../assets/img/icon-scifi.svg';

export const enum MenuLinkName {
  Quests = 'Квесты',
  Beginners = 'Новичкам',
  Reviews = 'Отзывы',
  Promotion = 'Акции',
  Contacts = 'Контакты',
}

export const menuLinks = [
  {
    name: MenuLinkName.Quests,
    route: '/',
  },
  {
    name: MenuLinkName.Beginners,
    route: '#',
  },
  {
    name: MenuLinkName.Reviews,
    route: '#',
  },
  {
    name: MenuLinkName.Promotion,
    route: '#',
  },
  {
    name: MenuLinkName.Contacts,
    route: '/contacts',
  },
];

export const enum GenreFromTheServer {
  All = 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

export const enum GenreForClient {
  All = 'Все квесты',
  Adventures = 'Приключения',
  Horror = 'Ужасы',
  Mystic = 'Мистика',
  Detective = 'Детектив',
  SciFi = 'Sci-fi',
  Unknown = 'Жанр неизвестен',
}

const Icon = {
  All: IconAllQuests,
  Adventures: IconAdventures,
  Horror: IconHorrors,
  Mystic: IconMystic,
  Detective: IconDetective,
  SciFi: IconScifi,
} as const;

export const genres = [
  {
    id: 1,
    title: GenreForClient.All,
    icon: Icon.All,
    type: GenreFromTheServer.All,
  },
  {
    id: 2,
    title: GenreForClient.Adventures,
    icon: Icon.Adventures,
    type: GenreFromTheServer.Adventures,
  },
  {
    id: 3,
    title: GenreForClient.Horror,
    icon: Icon.Horror,
    type: GenreFromTheServer.Horror,
  },
  {
    id: 4,
    title: GenreForClient.Mystic,
    icon: Icon.Mystic,
    type: GenreFromTheServer.Mystic,
  },
  {
    id: 5,
    title: GenreForClient.Detective,
    icon: Icon.Detective,
    type: GenreFromTheServer.Detective,
  },
  {
    id: 6,
    title: GenreForClient.SciFi,
    icon: Icon.SciFi,
    type: GenreFromTheServer.SciFi,
  },
];

export const enum LevelNameFromTheServer {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export const enum LevelNameForClient {
  Easy = 'Лёгкий',
  Medium = 'Средний',
  Hard = 'Сложный',
  Unknown = 'Cложность неизвестна',
}

export const enum AppRoute {
  Main = '/',
  Quest = '/detailed-quest',
  Contacts = '/contacts',
  NotFound = '*',
}

export const enum HttpCode {
  BadRequest = 400,
  NotFound = 404,
}

export const enum APIRoute {
  Quests = '/quests',
  Orders = '/orders',
}

export const enum FetchStatus {
  Idle = 'Idle',
  Pending = 'Pending',
  Success = 'Success',
  Failed = 'Failed',
}

export const enum NameSpace {
  App = 'App',
  Quests = 'Quests',
}

export const enum Location {
  Lat = 59.96832,
  Lng = 30.31647,
}
