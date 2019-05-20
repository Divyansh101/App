import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
//import {Fonts} from '../utils/Fonts'
import ImageSection from './imageSection';

const HomePageSection = (props) => {
    let views= []
    props.item.data.map(item => {
        views.push(<ImageSection  item = {item}  key = { item.id } type = {props.item.type} />)
    })
    const renderHeading = () => {
        if(props.item.type === "masthead")
            return null      
        return (
        <View style = {{flexDirection: 'row'}}>
            <Text style = {[styles.textStyle, {width: '77%' , fontSize : 19}]}  >
                { props.item.title }
            </Text>
            <View>
                <TouchableOpacity >
                    <Text style = {styles.textStyle} >See all</Text>
                </TouchableOpacity>
            </View>
        </View>);
        }

    return(
        <View>
            {renderHeading()}
            <ScrollView style = {styles.scrollViewStyle} horizontal>
                {views}
            </ScrollView>
        </View>
    )
} 

const styles = {
    
    textStyle: {
        marginTop: 20,
        fontWeight: "600",
        marginLeft: 13
    },
    scrollViewStyle : {
        marginTop: 20
    }
}
export default HomePageSection;