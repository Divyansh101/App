import React, { Component } from 'react';
import { Card, CardSection, Header } from './common';
import { Text, View } from 'react-native';
//mport Carousel from 'react-native-banner-carousel';
//import connect from 'react-redux';
//import homePageActions from '../actions/homePageActions';

class HomePage extends Component {
    componentDidMount() {
        {this.props.homePageActions}
    }
render() {

    return (
        <View>
            <Header headerText = {'Home'}/>
        </View>
        )   
    }
};


export default HomePage;