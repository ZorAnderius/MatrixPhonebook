import { initialAuthState } from './initialAuthState';

export const handlerAuthFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};

export const handlerRefreshFulfilled = (state, { payload }) => {
  const token = localStorage.getItem('token');
  token && (state.token = token);
  state.profile = payload;
  state.isRefresh = false;
};

export const handlerRefreshPending = state => {
  state.isRefresh = true;
};

export const handlerLogOutFulfilled = state => {
  state.token = initialAuthState.token;
  state.isRefresh = initialAuthState.isRefresh;
};
