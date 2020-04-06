import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';
import reducers from './reducers';


const sagaMid = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMid)
)

sagaMid.run(rootSaga);

export { store };