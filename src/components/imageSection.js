import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ImageSection extends Component{
    onPressButtonShows(){
        Actions.detailsPage({ data: this.props });
    }

    onPressButtonMovies(){
        Actions.videoPage({data: this.props });
    }

    renderImage() {
        if(this.props.type === "masthead" && this.props.item.type === "show" ) {
            return(
                <View>
                    <TouchableOpacity onPress = { this.onPressButtonShows.bind(this) } >
                        <Image style = { [ styles.sectionStyle ]}  source = {{ uri: this.props.item.imageUrl, width: 300 , height: 130 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { this.onPressButtonShows.bind(this) } >
                        <Text style = { [styles.textStyle, {width: 290}] } >{ this.props.item.title }</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (this.props.type === "landscape" && this.props.item.type === "show") {
            return(
                <View>
                    <TouchableOpacity onPress = { this.onPressButtonShows.bind(this) } >
                        <Image style = { styles.sectionStyle }  source = {{ uri: this.props.item.imageUrl, width: 150 , height: 90 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { this.onPressButtonShows.bind(this) } >
                        <Text style = { [styles.textStyle, {width: 140}] } >{ this.props.item.title }</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (this.props.type === "portrait" && this.props.item.type === "show") {
            return(
                <View>
                    <TouchableOpacity onPress = { this.onPressButtonShows.bind(this) } >
                        <Image style = { styles.sectionStyle }  source = {{ uri: this.props.item.imageUrl, width: 90, height: 150 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { this.onPressButtonShows.bind(this) } >
                    <Text style = { [styles.textStyle, {width: 80}] } >{ this.props.item.title }</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else if(this.props.type === "masthead") {
            return(
                <View>
                    <TouchableOpacity onPress = {this.onPressButtonMovies.bind(this)} >
                        <Image style = { styles.sectionStyle }  source = {{ uri: this.props.item.imageUrl, width: 300, height: 130 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { this.onPressButtonMovies.bind(this)} >
                    <Text style = { [styles.textStyle, {width: 290}] } >{ this.props.item.title }</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else if (this.props.type === "landscape") {
            return(
                <View>
                    <TouchableOpacity onPress = { this.onPressButtonMovies.bind(this)} >
                        <Image style = { styles.sectionStyle }  source = {{ uri: this.props.item.imageUrl, width: 150 , height: 90 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { this.onPressButtonMovies.bind(this)} >
                        <Text style = { [styles.textStyle, {width: 140}] } >{ this.props.item.title }</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (this.props.type === "portrait") {
            return(
                <View>
                    <TouchableOpacity onPress = { this.onPressButtonMovies.bind(this)} >
                        <Image style = { styles.sectionStyle }  source = {{ uri: this.props.item.imageUrl, width: 90, height: 150 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { this.onPressButtonMovies.bind(this)} >
                    <Text style = { [styles.textStyle, {width: 80}] } >{ this.props.item.title }</Text>
                    </TouchableOpacity>
                </View>
            );
        }

        return null;
    }

    render() {
        return (
            <View style = { styles.viewStyle }  >
                {this.renderImage()}
            </View>
        );
    }
}
const styles = {
    sectionStyle: {
        borderRadius: 2,
        flexDirection: 'row'
    },
    viewStyle: {
        paddingLeft: 8,
        paddingRight: 6
    },
    textStyle: {
        marginTop: 4,
        fontSize: 12,
        fontWeight: "500",
        height: 20
    }
}

export default ImageSection;
