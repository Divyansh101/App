import React, { Component } from 'react';
import { Card, CardSection, Header } from './common';
import { Text, View, ScrollView, Image} from 'react-native';
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
            {this.props.data ? this.props.data[0].data.map(item => 
            <ScrollView style = {styles.scrollViewStyles} 
                                directionalLockEnabled={false}
                                horizontal={true}  >
                <Image source={{uri:item.imageUrl  , width: 200, height: 200 } } />
            </ScrollView>)  : null}
        </View>
        )   
    }
};

const mapStateToProps = (state) => {
    return { data: state.Homepage.data };
}

const styles =  {
    scrollViewStyles : {
        height: 80,
        flexDirection: 'row'
    }
}
export default connect( mapStateToProps, { apiCall } )(HomePage);