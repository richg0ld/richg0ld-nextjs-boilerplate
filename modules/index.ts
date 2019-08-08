import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import sample, {sampleSaga} from './sample';

const rootReducer = combineReducers({
    loading,
    sample
});

export function* rootSaga() {
    // all 함수는 여러 사가를 합쳐주는 역할을 합니다.
    yield all([sampleSaga()]);
}


export default rootReducer;