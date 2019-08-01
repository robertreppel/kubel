import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'autotrack/lib/plugins/event-tracker';

// Before yarn build, set an environment variable with your own Google Analytics tracking code: export REACT_APP_KUBEL_GOOGLE_ANALYTICS_TRACKINGCODE=UA-XXXXXXXXX-X
window.ga('create', process.env.REACT_APP_KUBEL_GOOGLE_ANALYTICS_TRACKINGCODE, 'auto');

// Only require the plugins you've imported above.
window.ga('require', 'eventTracker');
window.ga('send', 'pageview');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
