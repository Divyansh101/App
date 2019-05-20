import React, { Component } from 'react';
import { View, Text, Image, ScrollView, FlatList} from 'react-native';
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
            <ScrollView style = {{backgroundColor : '#fff'}} >
                <Image style = {styles.imageStyle} source = {{uri: this.props.data.item.imageUrl, width: 350 , height:150 }} />
                <Text style = {styles.titleStyle} >{ this.props.data.item.title }</Text>
                <Text style = {styles.genreStyle} >{ this.props.data.item.genre }</Text>
                <Text style = {styles.descStyle} >{ this.props.data.item.description }</Text>
                <Text style = {styles.episodeStyle} >Episodes</Text>
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
            </ScrollView> 
        )
    }
}

const styles = {
    imageStyle: { 
        borderRadius: 4,
        marginTop: 92,
        alignSelf: 'center'
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
    }

}

const mapStateToProps = state => {
    console.log(state.Details.data)
    return { episodes: state.Details.data }
}

export default connect(mapStateToProps, { renderEpisodes } )(detailsPage);