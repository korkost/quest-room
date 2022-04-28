import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { selectFilterType } from '../app-slice/app-slice';
import { handleError } from '../../services/handle-error';

import { Quest } from '../../types/quest';
import { Order } from '../../types/order';
import { State, AppDispatch } from '../../types/state';
import {
  NameSpace,
  FetchStatus,
  APIRoute,
  GenreFromTheServer,
} from '../../utils/const';

interface InitialState {
  quests: Quest[];
  questsStatus: FetchStatus;
  questsError: boolean;

  quest: Quest | null;
  questStatus: FetchStatus;
  questError: boolean;

  sendOrderStatus: FetchStatus;
}

const initialState: InitialState = {
  quests: [],
  questsStatus: FetchStatus.Idle,
  questsError: false,

  quest: null,
  questStatus: FetchStatus.Idle,
  questError: false,

  sendOrderStatus: FetchStatus.Idle,
};

export const fetchQuestsAction = createAsyncThunk<
  Quest[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchQuests', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Quest[]>(APIRoute.Quests);
    return data;
  } catch (err) {
    handleError(err);
    throw err;
  }
});

export const fetchQuestAction = createAsyncThunk<
  Quest,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchQuest', async (id: number, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Quest>(`${APIRoute.Quests}/${id}`);
    return data;
  } catch (err) {
    handleError(err);
    throw err;
  }
});

export const sendOrder = createAsyncThunk<
  Order,
  Order,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/sendOrder',
  async (
    { name, peopleCount, phone, isLegal }: Order,
    { dispatch, extra: api },
  ) => {
    try {
      const { data } = await api.post<Order>(APIRoute.Orders, {
        name,
        peopleCount,
        phone,
        isLegal,
      });
      return data;
    } catch (err) {
      handleError(err);
      throw err;
    }
  },
);

export const questsSlice = createSlice({
  name: NameSpace.Quests,
  initialState,
  reducers: {
    changeOrderStatus: (state, action) => {
      state.sendOrderStatus = action.payload;
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(fetchQuestsAction.pending, (state) => {
        state.questsStatus = FetchStatus.Pending;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.questsStatus = FetchStatus.Success;
        state.quests = action.payload;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.questsStatus = FetchStatus.Failed;
        state.questsError = true;
      })
      .addCase(fetchQuestAction.pending, (state) => {
        state.questStatus = FetchStatus.Pending;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.questStatus = FetchStatus.Success;
        state.quest = action.payload;
      })
      .addCase(fetchQuestAction.rejected, (state) => {
        state.questStatus = FetchStatus.Failed;
        state.questError = true;
      })
      .addCase(sendOrder.pending, (state) => {
        state.sendOrderStatus = FetchStatus.Pending;
      })
      .addCase(sendOrder.fulfilled, (state) => {
        state.sendOrderStatus = FetchStatus.Success;
      })
      .addCase(sendOrder.rejected, (state) => {
        state.sendOrderStatus = FetchStatus.Failed;
      });
  },
});

export const { changeOrderStatus } = questsSlice.actions;

const selectQuestsState = (state: State) => state[NameSpace.Quests];

export const selectQuests = (state: State) => selectQuestsState(state).quests;
export const selectQuestsStatus = (state: State) =>
  selectQuestsState(state).questsStatus;
export const selectQuest = (state: State) => selectQuestsState(state).quest;
export const selectQuestStatus = (state: State) =>
  selectQuestsState(state).questStatus;
export const selectSendOrderStatus = (state: State) =>
  selectQuestsState(state).sendOrderStatus;

export const selectCurrentQuests = createSelector(
  selectQuests,
  selectFilterType,
  (quests, filterType) => {
    if (filterType === GenreFromTheServer.All) {
      return quests;
    }
    return quests.filter(({ type }) => type === filterType);
  },
);
