import { Character } from "../../dto/types/Character";
import { Info } from "../../dto/types/Info";

export const REQUESTED_PUBLIC_API = 'REQUESTED_PUBLIC_API';
export const REQUESTED_PUBLIC_API_SUCCEEDED = 'REQUESTED_PUBLIC_API_SUCCEEDED';
export const REQUESTED_PUBLIC_API_FAILED = 'REQUESTED_PUBLIC_API_FAILED';
export const FETCHED_PUBLIC_API = 'FETCHED_PUBLIC_API';
export const FETCHED_PUBLIC_API_MORE = 'FETCHED_PUBLIC_API_MORE';

interface FETCHED_PUBLIC_API {
  type: typeof FETCHED_PUBLIC_API
}

interface FETCHED_PUBLIC_API_MORE {
  type: typeof FETCHED_PUBLIC_API_MORE,
  url: string
}


interface REQUESTED_PUBLIC_API {
  type: typeof REQUESTED_PUBLIC_API
}

interface REQUESTED_PUBLIC_API_SUCCEEDED {
  type: typeof REQUESTED_PUBLIC_API_SUCCEEDED
  publicApiData: {
    info: Info,
    results: Character[]
  }
}

interface REQUESTED_PUBLIC_API_FAILED {
  type: typeof REQUESTED_PUBLIC_API_FAILED
  error: boolean
}

export type PublicApiActionTypes = REQUESTED_PUBLIC_API | REQUESTED_PUBLIC_API_SUCCEEDED | REQUESTED_PUBLIC_API_FAILED | FETCHED_PUBLIC_API | FETCHED_PUBLIC_API_MORE;
export type FetchPublicApiMore = FETCHED_PUBLIC_API_MORE;