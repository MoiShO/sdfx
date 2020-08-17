import { call, put, takeEvery } from 'redux-saga/effects'
import { requestPublicApi, requestPublicApiSuccess, requestPublicApiError } from '../store/actions/actions';
import { FETCHED_PUBLIC_API, FetchPublicApiMore, FETCHED_PUBLIC_API_MORE } from "../store/actions/actionTypePublicApi"
import PublicAPIService from '../services/publicApis';

function* fetchPublicApiAsync() {
   try {
      yield put(requestPublicApi());
      const publicApiData = yield call(() => PublicAPIService.getFirstPageCharacter());
      yield put(requestPublicApiSuccess(publicApiData));
   } catch (error) {
      yield put(requestPublicApiError());
   }
}

function* fetchPublicApiAsyncMore(action: FetchPublicApiMore) {
   try {
      yield put(requestPublicApi());
      const publicApiData = yield call(() => PublicAPIService.getOthersPageCharacter({url: action.url}));
      yield put(requestPublicApiSuccess(publicApiData));
   } catch (error) {
      yield put(requestPublicApiError());
   }
}

export const publicApiSagas = [
   takeEvery(FETCHED_PUBLIC_API, fetchPublicApiAsync),
   takeEvery(FETCHED_PUBLIC_API_MORE, fetchPublicApiAsyncMore),
 ];
