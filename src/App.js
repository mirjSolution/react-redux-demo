import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h2 style={{ color: 'blue' }}>
          Sample containers with two parameters in mapStateToProps and
          mapDispatchToProps
        </h2>
        <ItemContainer cake />
        <ItemContainer />
        <h2 style={{ color: 'blue' }}>Sample containers normal use of redux</h2>
        <CakeContainer />
        <IceCreamContainer />
        <h2 style={{ color: 'blue' }}>
          Sample container using useSelector and useDispatch Hooks
        </h2>
        <HookCakeContainer />
        <h2 style={{ color: 'blue' }}>
          Sample using reducer with action.payload
        </h2>
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
