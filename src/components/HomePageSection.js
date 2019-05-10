import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
//import {Fonts} from '../utils/Fonts'

const HomePageSection = (props) => {
    let views= []
    props.item.data.map(item => {
        views.push(<Image style = { styles.sectionStyle }  source = {{ uri: item.imageUrl, width: 300, height: 130 }} />)
    })

    return(
        <View>
            <View style = {{flexDirection: 'row'}}>
                <Text style = {[styles.textStyle, {width: '77%' , fontSize : 19}]}  >
                    {props.item.title}
                </Text>
                <View>
                    <TouchableOpacity >
                        <Text style = {styles.textStyle} >See all</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView horizontal>
                {views}
            </ScrollView>
        </View>
    )
}

const styles = {
    sectionStyle: {
        marginLeft: 10,
        borderRadius: 4,
        resizeMode: 'stretch',
        flexDirection: 'row'

    },
    textStyle: {
        marginTop: 20,
        marginBottom: 20,
        fontWeight: "600",
        marginLeft: 13
    }
}
export default HomePageSection;