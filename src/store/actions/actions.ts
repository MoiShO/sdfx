import { PublicResponseApi } from "../../dto/types/PublicResponseApi"

import {
    REQUESTED_PUBLIC_API,
    REQUESTED_PUBLIC_API_SUCCEEDED,
    REQUESTED_PUBLIC_API_FAILED,
    FETCHED_PUBLIC_API,
    FETCHED_PUBLIC_API_MORE
} from "./actionTypePublicApi"

const requestPublicApi = () => {
    return { type: REQUESTED_PUBLIC_API }
};

const requestPublicApiSuccess = (data: PublicResponseApi) => {
    return { type: REQUESTED_PUBLIC_API_SUCCEEDED, publicApiData: data }
};

const requestPublicApiError = () => {
    return { type: REQUESTED_PUBLIC_API_FAILED }
};

const fetchPublicApi = () => {
    return { type: FETCHED_PUBLIC_API }
};

const fetchPublicApiMore = (url: String) => {
    return { type: FETCHED_PUBLIC_API_MORE, url: url }
};



export { requestPublicApi, requestPublicApiSuccess, requestPublicApiError, fetchPublicApi, fetchPublicApiMore }