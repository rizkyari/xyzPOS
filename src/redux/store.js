import {createStore, applyMiddleware, compose} from 'redux';
import { routerMiddleware } from 'connected-react-router';
import {createBrowserHistory} from 'history';
import middleware from './middleware';
import reducers from './reducer';

export const history = createBrowserHistory()

export default function configureStore(preloadedState){
    const store = createStore(
        reducers(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                ...middleware
            )
        )
    )
    if (module.hot) {
	  module.hot.accept('./reducer', () => {
		/* For Webpack 2.x
		   Need to disable babel ES2015 modules transformation in .babelrc
		   presets: [
			 ["es2015", { "modules": false }]
		   ]
		*/
		store.replaceReducer(reducers(history))

		/* For Webpack 1.x
		const nextRootReducer = require('./reducers').default
		store.replaceReducer(nextRootReducer(history))
		*/
	  })
	}
    return store
}