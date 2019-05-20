import React, { Component } from 'react';
import { Text, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

class SeeAll extends Component {
    onButtonPress(){
        Actions.seeAllPage({ data: this.props.data })
    }

    render(){
        return(
            <TouchableOpacity onPress = {this.onButtonPress.bind(this)} >
                <Text style = {styles.textStyle} >See All</Text>
            </TouchableOpacity>
        )
    }     
}

const styles = {
    textStyle: {
        marginTop: 20,
        fontWeight: "600",
        marginLeft: 13
    }
}
export default SeeAll;