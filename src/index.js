import ReactDOM from "react-dom";
import { Route, Switch ,BrowserRouter} from "react-router-dom";
import { Provider} from 'react-redux';

import './assets/index.less'

import store from "./redux/store";
import Main from "./containers/main/main";
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route component={Main}></Route> {/*默认组件*/}
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );