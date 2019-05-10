import React, { Component } from 'react';
import { Card, CardSection, Header } from './common';
import { Text, View, ScrollView, Image} from 'react-native';
//import Carousel from 'react-native-banner-carousel';
import { connect } from 'react-redux';
import { apiCall } from '../actions/homePageActions';
import HomePageSection from './HomePageSection';

class HomePage extends Component {
    componentDidMount() {

        {this.props.apiCall()}
    }
render() {

    return (
        <View>
            <Header headerText = {'Home'} />
            {this.props.data ? this.props.data.map(item =>  <HomePageSection item = {item} /> ): null}
        </View>
        )   
    }
};

const mapStateToProps = (state) => {
    return { data: state.Homepage.data };
}


export default connect( mapStateToProps, { apiCall } )(HomePage)