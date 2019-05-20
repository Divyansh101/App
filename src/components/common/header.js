//import libraries for making a component 
import React from 'react';
import {Text, View } from 'react-native';

//make the component

const Header = (props)=>{
    const {textStyle, viewStyle} = styles;
    return(
        <View style = {viewStyle}>
            <Text style = {textStyle}>{props.headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        height: 70,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        elevation: 2
    }, 
    textStyle: {
        fontFamily: "Archivo-Medium",
        fontSize: 18,
        marginTop: 45
    }
}
//make the component available to other components of the app

export { Header } ; 