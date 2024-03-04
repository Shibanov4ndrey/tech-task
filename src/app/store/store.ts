import { configureStore } from '@reduxjs/toolkit';
import { api } from "@shared";
import users from '@entities/users/model/users-slice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    users,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
