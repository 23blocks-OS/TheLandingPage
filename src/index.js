import './assets/sass/main.scss';
import 'jquery';
import './assets/js/jquery.scrolly.min.js';
import './assets/js/jquery.dropotron.min.js';
import './assets/js/jquery.scrollex.min.js';
import './assets/js/browser.min.js';
import './assets/js/breakpoints.min.js';
import './assets/js/util.js';
import './assets/js/main.js';

// API Calls. ie. Subscribe form 
import "./formsHandlers.js";

// Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

