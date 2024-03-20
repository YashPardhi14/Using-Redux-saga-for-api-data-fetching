import { TaskInformation } from '../../../models/TaskInformation';
import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchPostsFailure,
  fetchPostsSuccess,
} from '../../actions/postActions';
import { postTypes } from '../../ActionsTypes/postTypes';

const getPost = () =>
  axios.get<TaskInformation[]>('https://jsonplaceholder.typicode.com/todos');

function* fetchPostsSaga(): any {
  try {
    const response = yield call(getPost);
    yield put(
      fetchPostsSuccess({
        posts: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchPostsFailure({
        error: e.message,
      })
    );
  }
}

function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
