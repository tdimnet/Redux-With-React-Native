import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './components/reducers';
import { Header } from './components/common/index';

const App = () => {
  return (
    <Provider>
      <View style={{flex: 1}} >
        <Header headerText="Tech Stack"/>
      </View>
    </Provider>
  )
}

export default App;
