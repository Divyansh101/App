import React, { Component } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { renderEpisodes } from '../actions/detailsPageActions';
import { Actions } from 'react-native-router-flux';

class seeAllPage extends Component {

    componentDidMount(){
        this.props.renderEpisodes()
    }

    onPressButton(item){
        Actions.videoPageTwo({ item: item })
    }

    render(){
        return( 
        <View style = {{ flex: 1, backgroundColor: 'white' }} >
            <FlatList 
                style = {{marginLeft: 14, marginTop: 10, marginRight: 14}} 
                data = {this.props.episodes}
                renderItem = { ({item}) =>
                    <View style = {{ flexDirection: 'row' }} >
                        <TouchableOpacity onPress = {this.onPressButton.bind(item)}>
                            <Image 
                                style = {styles.episodesImageStyle}
                                source = {{uri: item.imageUrl, width: 190, height: 90}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {this.onPressButton.bind(item)}>
                            <View>
                                <Text style = { styles.episodeTextStyle } >{ item.title }</Text>  
                                <Text style = {{fontFamily: 'Archivo-Medium', marginTop: 7, marginLeft: 10}} >{ item.date }</Text>  
                            </View>
                        </TouchableOpacity>
                    </View>} 
                keyExtractor = { (item)  => item.id }
            />
        </View>
        )
    }
}
const styles = {
    episodesImageStyle: {
        borderRadius: 4,
        marginBottom: 10
    },
    episodeTextStyle: {
        fontFamily: 'Archivo-Medium',
        fontSize: 16,
        marginTop: 20,
        marginLeft: 10
    }
}
const mapStateToProps = state => {
    console.log(state.Details.data)
    return { episodes: state.Details.data }
}

export default connect(mapStateToProps, { renderEpisodes } )(seeAllPage);