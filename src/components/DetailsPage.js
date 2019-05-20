import React, { Component } from 'react';
import { View, Text, Image, Dimensions, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { renderEpisodes } from '../actions/detailsPageActions';

class detailsPage extends Component{

    componentDidMount(){
        this.props.renderEpisodes()
    }

    // populateData() {
    //     this.dataArray = []
    //     if(this.props.data.item) {
    //         this.detailItem = {id: '-1', type:'detail', data:this.props.data.item};
    //         this.dataArray.push(this.detailItem);
    //     }
    //     if(this.props.episodes) {
    //         this.props.episodes.map((item)  => {
    //             this.dataArray.push(item);
    //         });
    //     }
    // }

    // episodeItem({ item }){
    //     return(
    //     <View key={item.id} style= {{marginTop: 70}} >
    //         <Image style = { styles.imageStyle } source = {{uri: item.imageUrl, width: 250, height: 150}} />
    //         <Text>{ item.title }</Text>
    //     </View>
    //     );
    // }

//     render(){
//         this.populateData()
//         return(
//             <FlatList
//                 data= {this.dataArray}
//                 renderItem= {({item}) =>
//                 <View>
//                     <DetailsPageSection data={item.data} />
//                     {this.episodeItem({ item })}
//                 </View>    
//                 }
//             />
//         )
//     }

    render(){
        return(
            <View>
            <Image source = {{uri: this.props.data.imageUrl, width: 350 , height:150 }} />
            <Text>{ this.props.data.title }</Text>
            <Text>{ this.props.data.genre }</Text>
            <Text>{ this.props.data.description }</Text>
            <Text>Episodes</Text>
            <Text style = {{marginLeft: 14, marginTop: 10}}>{this.props.episodes? this.props.episodes[0].title : null }</Text>
        </View> 
        )
    }
}

const styles = {
    imageStyle: { 
        borderRadius: 4
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
        marginTop: 10,
        marginLeft: 14

    }

}

const mapStateToProps = state => {
    console.log(state.Details.data)
    return { episodes: state.Details.data }
}

export default connect(mapStateToProps, { renderEpisodes } )(detailsPage);