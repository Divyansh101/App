import React, { Component } from 'react';
import { Card, CardSection, Header } from './common';
import { Text, View, FlatList} from 'react-native';
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
            <Header headerText = {'home'} />
            <FlatList
            data = {this.props.data}
            renderItem = {
                ({item}) => <FlatList
                data = {item.data}
                horizontal
                renderItem = {
                    ({item}) => <Text>{ item.title }</Text>
                } 
                keyExtractor = { item  => item.id  }
                />
            } 
            keyExtractor = { item  => item.id  }
            />
        </View>
        )   
    }
};

const mapStateToProps = (state) => {
    return { data: state.Homepage.data };
}

export default connect( mapStateToProps, { apiCall } )(HomePage);