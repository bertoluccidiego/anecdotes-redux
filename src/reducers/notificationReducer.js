import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: null,
  TID: null,
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    changeNotification(state, action) {
      return {
        text: action.payload.text,
        TID: action.payload.TID,
      };
    },
    resetNotification() {
      return {
        text: null,
        TID: null,
      };
    },
  },
});

export const { changeNotification, resetNotification } =
  notificationSlice.actions;

export function setNotification(text, time) {
  return async (dispatch, getState) => {
    const state = getState();
    const prevTID = state.notifications.TID;
    clearTimeout(prevTID);
    const TID = setTimeout(() => dispatch(resetNotification()), time * 1000);
    dispatch(changeNotification({ text, TID }));
  };
}
export default notificationSlice.reducer;
