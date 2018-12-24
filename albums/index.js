//import a library to create a component
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a component
const App = () => {
    //Flex: 1 to expand the scrollable view to the top to 
    //end otherwise that may not be completely scrollable
    return (
        <View style={{flex: 1}}>
            <Header text="Albums" />
            <AlbumList />
        </View>
    );
};

//render it to the device
AppRegistry.registerComponent('albums', () => App);