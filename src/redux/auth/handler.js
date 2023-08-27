import { initialAuthState } from './initialAuthState';

export const handlerAuthFulfilled = (state, { payload }) => {
  console.log('payload', payload);
  state.token = payload.token;
  state.profile = payload.user;
  state.isLoggedIn = true;
};

export const handlerRefreshFulfilled = (state, { payload }) => {
  state.profile = payload;
  state.isRefresh = false;
  state.isLoggedIn = true;
};

export const handlerRefreshPending = state => {
  state.isRefresh = true;
};

export const handlerLogOutFulfilled = state => {
  state.token = initialAuthState.token;
  state.isLoggedIn = initialAuthState.isLoggedIn;
  state.isRefresh = initialAuthState.isRefresh;
};
