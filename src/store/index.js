import {createSlice, configureStore} from '@reduxjs/toolkit';
const initialAuthState = {
  id: '',
  name: '',
  userName: '',
  email: '',
  avatar: '',
  coverImage: '',
  token: '', //store only accessToken
  isLoading: true,
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    restoreToken(state, action) {
      if (action.payload.user) {
        const user = action.payload.user;
        state.id = user.id;
        state.name = user.name;
        state.userName = user.userName;
        state.email = user.email;
        state.avatar = user.avatar;
        state.coverImage = user.coverImage;
      }
      state.token = action.payload.token;
      (state.isLoading = false), (state.isLoggedIn = true);
    },
    login(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.coverImage = action.payload.coverImage;
      state.token = action.payload.token;
      (state.isLoading = false), (state.isLoggedIn = true);
    },
    signOut(state, action) {
      return {
        ...initialAuthState,
        isLoggedIn: false,
        isLoading: false,
      };
    },
  },
});
const store = configureStore({
  reducer: {auth: authSlice.reducer},
});
export const {login, restoreToken, signOut} = authSlice.actions;
export default store;
