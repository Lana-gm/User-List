import { all } from "redux-saga/effects";
import usersSaga from "./modules/users/sagas";

export default function* rootSaga() {
  yield all([usersSaga()]);
}
