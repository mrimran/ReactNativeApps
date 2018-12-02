//import a library to create a component
import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header';

//create a component
const App = () => {
    return (
        <Header text="Albums" />
    );
};

//render it to the device
AppRegistry.registerComponent('albums', () => App);