import publicApiReducer from '../src/reducers/publicApiReducer';
import { REQUESTED_PUBLIC_API } from '../src/store/actions/actionTypePublicApi';
import initialState from '../src/reducers/initialState';


describe('reducer', () => {
    it('should handle REQUESTED_PUBLIC_API', () => {
        expect(
            publicApiReducer(initialState, {
                type: REQUESTED_PUBLIC_API,
            })
        ).toEqual({ ...initialState, loading: true, error: false })
    })
})