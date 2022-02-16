

import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
// import { createHashHistory } from 'history's
// import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'

// import reducers from './redux/reducers'
import store, { history, sagaMiddleware } from 'store/configureStore';
import Localization from './localization';
import Router from './router';
import * as serviceWorker from './serviceWorker';
import sagas from 'store/sagas';

// mocking asdasdasdasdasdasdasdasdasd
import 'services/axios/fakeApi';

// import 'antd/lib/style/index.less' // antd core styles
import './components/kit/vendors/antd/themes/default.less' // default theme antd components
import './components/kit/vendors/antd/themes/dark.less' // dark theme antd components
import './global.scss' // app & third-party component styles
import { coop_id_laman } from './constants/apiTestData'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-datetime/css/react-datetime.css';
// import 'antd/dist/antd.css';

// middlewaresasdasd
// const history = createHashHistory()
// const sagaMiddleware = createSagaMiddleware()
// const routeMiddleware = routerMiddleware(history)
// const middlewares = [sagaMiddleware, routeMiddleware]
// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger)
// }
// const store = createStore(reducers(history), compose(applyMiddleware(...middlewares)))
// axios.defaults.baseURL = "http://api.arcs.ph"
// axios.defaults.baseURL = "https://api.picpabbmp.com/";
axios.defaults.baseURL = "https://api.arcs.ph"
// axios.defaults.headers.common = {
//     ["for-coop-id"]: coop_id_laman
// }
// axios.defaults.baseURL = "http://arcs-ecsal-1htix5rsg2c5d-690109705.ap-southeast-1.elb.amazonaws.com"
sagaMiddleware.run(sagas);
ReactDOM.render(
    <Provider store={store}>
        <Localization>
            <Router history={history} />
        </Localization>
    </Provider>,
    document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
export { store, history }
