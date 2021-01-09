import dva from 'dva';
import './index.css';

// 1. Initialize
import { createBrowserHistory as createHistory } from '_history@4.10.1@history';
const app = dva({
  history: createHistory(),
});
//const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/indexTest').default);
app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
