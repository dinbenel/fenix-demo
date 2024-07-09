import {Provider} from 'react-redux';
import MainNavigation from './navigation/MainNavigation';
import {store} from './store/rootStore';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

export default App;
