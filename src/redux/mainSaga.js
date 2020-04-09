import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth2110Saga from '../features/EmailAuth2110/redux/sagas';
import EmailAuth2109Saga from '../features/EmailAuth2109/redux/sagas';
import EmailAuth2108Saga from '../features/EmailAuth2108/redux/sagas';
import EmailAuth2107Saga from '../features/EmailAuth2107/redux/sagas';
import EmailAuth2106Saga from '../features/EmailAuth2106/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth2110Saga,
EmailAuth2109Saga,
EmailAuth2108Saga,
EmailAuth2107Saga,
EmailAuth2106Saga,
EmailAuthSaga,
    
  ]);
}