import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

registerRoute(
  new RegExp('\\.js$'),
  new StaleWhileRevalidate(),
);

registerRoute(
  new RegExp('\\.css$'),
  new StaleWhileRevalidate(),
);