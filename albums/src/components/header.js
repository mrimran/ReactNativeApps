import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.text}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#ddd',
        justifyContent: 'center',//move content up and down (vertically)
        alignItems: 'center',//move content left or right (horizantally)
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;