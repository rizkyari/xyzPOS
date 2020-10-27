import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

const middleware = [];

middleware.push(promise);
if(process.env.NODE_ENV === `development`){
    middleware.push(logger);
}

export default middleware;