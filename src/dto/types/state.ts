import { PublicResponseApi } from './PublicResponseApi'

export interface RootState {
    publicApiReducer: {
        publicApiData: PublicResponseApi,
        loading: boolean,
        error: boolean
    }
}