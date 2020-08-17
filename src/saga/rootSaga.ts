import { all } from 'redux-saga/effects'
import { publicApiSagas } from "./publicApiSaga"

export default function* rootSaga() {
    yield all([
      ...publicApiSagas,
    ])
  }