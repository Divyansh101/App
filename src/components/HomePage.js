import React, { Component } from 'react';
import { Card, CardSection, Header } from './common';
import { Text, View } from 'react-native';
//import Carousel from 'react-native-banner-carousel';
import { connect } from 'react-redux';
import { apiCall } from '../actions/homePageActions';

class HomePage extends Component {
    componentDidMount() {
        {this.props.apiCall()}
    }
render() {

    return (
        <View>
            <Header headerText = { 'Home' }/>
            <Text>{this.props.data[0].data[0].title}</Text>
        </View>
        )   
    }
};

const mapStateToProps = (state) => {
    return { data: state.Homepage.data };
}

export default connect( mapStateToProps, { apiCall } )(HomePage);