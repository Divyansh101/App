import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { View } from 'react-native'; 
import ReduxThunk from 'redux-thunk';
import Routes from './router';
const App = () => {
    return(
        <Provider store = { createStore( reducers , {} , applyMiddleware(ReduxThunk) ) } >
            <View style = {{flex: 1}}>
                <Routes />
            </View>
        </Provider>
    )
}

export default App;