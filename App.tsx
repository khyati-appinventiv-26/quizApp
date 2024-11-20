
import React from 'react';
import {
  View,
} from 'react-native';

import AppNavigator from './src/navigator/AppNavigator';


function App(): React.JSX.Element {

  return (
    <View style={{flex:1}}>
      <AppNavigator/>
    </View>
  );
}



export default App;
