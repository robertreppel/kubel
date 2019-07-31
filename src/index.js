import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Import just the plugins you want to use.
import 'autotrack/lib/plugins/event-tracker';
import 'autotrack/lib/plugins/outbound-link-tracker';
import 'autotrack/lib/plugins/url-change-tracker';

window.ga('create', 'UA-XXXXXXXXX-X', 'auto');

// Only require the plugins you've imported above.
window.ga('require', 'eventTracker');
window.ga('require', 'outboundLinkTracker');
window.ga('require', 'urlChangeTracker');

window.ga('send', 'pageview');


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
