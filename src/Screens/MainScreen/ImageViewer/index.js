import React from 'react';
import { View, Text, AsyncStorage, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import Icon from "react-native-vector-icons/Ionicons";
import Colors from '../../../Config/Colors';
import Toast from 'react-native-simple-toast';

var tasktype= '';
export default class Tasks extends React.Component{
    
  state={
    usertype: '',
    Jobs: [],
    searchTerm: '',
    image:'',
  }
  componentWillMount = () =>{
    const urifile = this.props.navigation.getParam('file');
    this.setState({
      image:urifile
    })
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Image',
    drawerLabel: 'Image',
    headerTintColor: Colors.white,
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerLeft: (
      <TouchableOpacity onPress={()=>navigation.navigate('TaskDetail')}>
      <Image style={styles.backicon} source={require('../../../Images/back.png')}></Image>
      </TouchableOpacity>
    ),
  })
    
     
 render(){
    return(
        <View style={styles.container}>
      <Image style={styles.imagestyle} source={{uri:this.state.image}}></Image>
           </View>
       
    )
}
}

