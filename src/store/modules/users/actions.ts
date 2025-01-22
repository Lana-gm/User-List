import { User } from "./types";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });

export const fetchUsersSuccess = (users: User[]) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error: string) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const addToFavorites = (user: User) => ({
  type: ADD_TO_FAVORITES,
  payload: user,
});

export const removeFromFavorites = (userId: number) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: userId,
});
