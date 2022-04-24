import { store } from '../store/store';

export type State = ReturnType<typeof store.getState>;
export type AppDispattch = typeof store.dispatch;
