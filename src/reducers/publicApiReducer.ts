import initialState from './initialState';
import { PublicApiActionTypes } from '../store/actions/actionTypePublicApi';
import {
    REQUESTED_PUBLIC_API,
    REQUESTED_PUBLIC_API_SUCCEEDED,
    REQUESTED_PUBLIC_API_FAILED,
} from "../store/actions/actionTypePublicApi"

export default function publicApiReducer(state = initialState, action: PublicApiActionTypes) {
	switch (action.type) {
		case REQUESTED_PUBLIC_API:
		  return {...state , loading: true, error: false};
		case REQUESTED_PUBLIC_API_SUCCEEDED:
		  return {...state , loading: false, publicApiData: {
			  info: action.publicApiData.info,
			  results: [...state.publicApiData.results, ...action.publicApiData.results],
			}
		};
		case REQUESTED_PUBLIC_API_FAILED:
		  return {...state , loading: false, error: true};
		default:
		  return state;
	  }
}
