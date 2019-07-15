/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
    StyleSheet,
    ScrollView,
    // SafeAreaView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import DashboardStack from "./src/navigations/DashboardStack";
import configureStore from './src/internal/store';
import {SafeAreaView} from 'react-navigation'

const store = configureStore()
import {Provider} from 'react-redux';
import SplashScreen from "./src/components/SplashScreen";

const RootStack = createAppContainer(createSwitchNavigator({
      DashboardStack: {
          screen: DashboardStack
      },
      SplashScreen: {
          screen: SplashScreen
      },
  }, {
      initialRouteName: "SplashScreen",
      headerMode: "none"
  }
));

const App = () => {
    return (
      <Provider store={store}>
          <StatusBar backgroundColor="white" barStyle="dark-content"/>
          <SafeAreaView
            forceInset={{top: 'never'}}
            style={{flex: 1, backgroundColor: '#fff'}}>
              <RootStack/>
          </SafeAreaView>
      </Provider>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
