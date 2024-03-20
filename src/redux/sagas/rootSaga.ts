import postsSaga from './postSaga/postSaga';
import { all, fork } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([fork(postsSaga)]);
}
