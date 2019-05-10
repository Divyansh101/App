import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import {Fonts} from '../utils/Fonts'

const HomePageSection = (props) => {
    let views= []
    props.item.data.map(item => {
        views.push(<Image style = { styles.sectionStyle }  source = {{ uri: item.imageUrl, width: 200, height: 100 }} />)
    })

    return(
        <View>
            <Text style = {styles.textStyle} >
                {props.item.title}
            </Text>
            <ScrollView horizontal>
                {views}
            </ScrollView>
        </View>
    )
}

const styles = {
    sectionStyle: {
        marginLeft: 10
    },
    textStyle: {
        marginTop: 20,
        marginBottom: 20
    }
}
export default HomePageSection;