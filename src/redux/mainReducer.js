import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth2110Reducer from '../features/EmailAuth2110/redux/reducers';
import EmailAuth2109Reducer from '../features/EmailAuth2109/redux/reducers';
import EmailAuth2108Reducer from '../features/EmailAuth2108/redux/reducers';
import EmailAuth2107Reducer from '../features/EmailAuth2107/redux/reducers';
import EmailAuth2106Reducer from '../features/EmailAuth2106/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth2110: EmailAuth2110Reducer,
EmailAuth2109: EmailAuth2109Reducer,
EmailAuth2108: EmailAuth2108Reducer,
EmailAuth2107: EmailAuth2107Reducer,
EmailAuth2106: EmailAuth2106Reducer,
EmailAuth: EmailAuthReducer,

});