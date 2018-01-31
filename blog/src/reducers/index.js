import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostReducer,
  form: FormReducer
});

export default rootReducer;
