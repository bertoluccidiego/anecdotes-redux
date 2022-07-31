import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    changeNotification(state, action) {
      return action.payload;
    },
    resetNotification() {
      return null;
    },
  },
});

export const { changeNotification, resetNotification } =
  notificationSlice.actions;

export function setNotification(text, time) {
  return async (dispatch) => {
    setTimeout(() => dispatch(resetNotification()), time * 1000);
    dispatch(changeNotification(text));
  };
}
export default notificationSlice.reducer;
