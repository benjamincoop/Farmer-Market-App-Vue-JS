import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

console.log('Hello from service-worker.js');

registerRoute(
  new RegExp('\\.js$'),
  new StaleWhileRevalidate(),
);

registerRoute(
  new RegExp('\\.css$'),
  new StaleWhileRevalidate(),
); 