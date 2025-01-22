import {
  ADD_TO_FAVORITES,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  REMOVE_FROM_FAVORITES,
  UsersActions,
} from "./actions";

import { UsersState } from "./types";

const initialState: UsersState = {
  users: [],
  favorites: [],
  loading: false,
  error: false,
};

const usersReducer = (
  state = initialState,
  action: UsersActions
): UsersState => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default usersReducer;
