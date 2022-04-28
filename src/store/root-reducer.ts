import { combineReducers } from '@reduxjs/toolkit';

import { appSlice } from './app-slice/app-slice';
import { questsSlice } from './quests-slice/quests-slice';

import { NameSpace } from '../utils/const';

export const rootReducer = combineReducers({
  [NameSpace.App]: appSlice.reducer,
  [NameSpace.Quests]: questsSlice.reducer,
});
