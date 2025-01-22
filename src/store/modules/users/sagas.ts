import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USERS_REQUEST,
  fetchUsersFailure,
  fetchUsersSuccess,
} from "./actions";
import { User } from "./types";

function* fetchUsersSaga(): Generator {
  try {
    const response = yield call(
      axios.get<User[]>,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchUsersFailure(error.message));
    } else {
      yield put(fetchUsersFailure("An unknown error occurred."));
    }
  }
}

export default function* usersSaga() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}
