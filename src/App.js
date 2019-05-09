import React from 'react';
import HomePage from './components/HomePage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { View } from 'react-native'; 
import ReduxThunk from 'redux-thunk';
const App = () => {
    return(
        <Provider store = { createStore(reducers) } >
            <HomePage />
        </Provider>
    )
}

export default App;