import React, { Component } from 'react';
import Video from 'react-native-video';
import { connect } from 'react-redux';
import { renderEpisodes } from '../actions/detailsPageActions';
import { View, Image, Text,FlatList } from 'react-native';

class VideoPagetwo extends Component {

    componentDidMount(){
        this.props.renderEpisodes()
    }

    render(){
        console.log(this.props.data)
        return(
        <View style = {{backgroundColor: '#fff'}} >
        <View style = 
        {{  width: 375,
            height: 190} }>
            <Video 
            source={{uri: this.props.data.hlsUrl}}   // Can be a URL or a local file.                                
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onError={this.videoError}               // Callback when video cannot be loaded
            style = {styles.backgroundVideo}
            controls
            />
        </View>
            <View>
                <Text style = {styles.titleStyle} >{ this.props.data.title }</Text>
                <Text style = {styles.genreStyle} >{ this.props.data.genre }</Text>
                <Text style = {styles.descStyle} >{ this.props.data.description }</Text>
            </View>
            <Text style = {styles.episodeStyle} >Coming up next</Text>
            <FlatList 
                style = {{marginLeft: 14, marginTop: 10, marginRight: 14}} 
                data = {this.props.episodes}
                renderItem = { (item) =>
                    <View style = {{ flexDirection: 'row' }} >
                        <Image 
                            style = {styles.episodesImageStyle}
                            source = {{uri: item.item.imageUrl, width: 190, height: 90}} />
                        <View>
                            <Text style = { styles.episodeTextStyle } >{ item.item.title }</Text>  
                            <Text style = {{fontFamily: 'Archivo-Medium', marginTop: 7, marginLeft: 10}} >{ item.item.date }</Text>  
                        </View>
                    </View>} 
                keyExtractor = { (item)  => item.id }
            />
        </View>
    )
    }
}

const styles = {
    backgroundVideo: {
      flex: 1
    },
    titleStyle: {
        fontFamily: 'Archivo-Medium',
        marginLeft: 14,
        fontSize: 18,
        marginTop: 10
    },
    genreStyle: {
        fontFamily: 'Archivo-SemiBold',
        color: '#303030',
        fontSize: 16,
        marginLeft: 14,
        marginTop: 10
    },
    descStyle: {
        fontFamily: 'Archivo-Regular',
        fontSize: 13,
        marginLeft: 14,
        marginRight: 14,
        marginTop: 10
    },
    episodeStyle: {
        fontFamily: 'Archivo-Medium',
        fontSize: 18,
        marginTop: 15,
        marginLeft: 14,
        marginBottom: 15

    },
    episodesImageStyle: {
        borderRadius: 4,
        marginBottom: 10
    },
    episodeTextStyle: {
        fontFamily: 'Archivo-Medium',
        fontSize: 16,
        marginTop: 20,
        marginLeft: 10
    },
    episodeStyle: {
        fontFamily: 'Archivo-Medium',
        fontSize: 18,
        marginTop: 10,
        marginLeft: 14

    }
};

const mapStateToProps = state => {
    console.log(state.Details.data)
    return { episodes: state.Details.data }
}

export default connect(mapStateToProps, { renderEpisodes } )(VideoPagetwo);