import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StepsContextProvider} from './components/steps/stepsContext/StepsContext';
import {StepsContainer} from './components/steps/stepsContainer/StepsContainer';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <StepsContextProvider>
        <StepsContainer />
      </StepsContextProvider>
    </SafeAreaView>
  );
};

export default App;
