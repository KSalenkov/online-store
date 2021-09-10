import { init } from '@rematch/core';
import loadingPlugin from '@rematch/loading';

import main from './models';

const store = init({
  models: { main },
  plugins: [loadingPlugin()],
});

export default store;
