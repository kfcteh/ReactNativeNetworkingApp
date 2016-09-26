import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import Dimensions from 'Dimensions';

var windowSize = Dimensions.get('window');

class Networking extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
           <View style={styles.container}>
               <Image style={styles.bg} source={{uri: 'http://i.imgur.com/xlQ56UK.jpg'}} />
               <View style={styles.inputs}>
                    <View style={styles.inputContainer}>
                       <Image style={styles.inputUsername} source={{uri: 'http://i.imgur.com/iVVVMRX.png'}}/>
                       <TextInput
                          style={styles.input}
                           placeholder="Username"
                           placeholderTextColor="black"
                           underlineColorAndroid='rgba(0,0,0,0)'
                           value={this.state.username}
                           onChangeText={(username) => this.setState({username})}
                       />
                    </View>
                    <View style={styles.inputContainer}>
                       <Image style={styles.inputPassword} source={{uri: 'http://i.imgur.com/ON58SIG.png'}}/>
                       <TextInput
                           style={styles.input}
                           secureTextEntry={true}
                           placeholder="Password"
                           placeholderTextColor="black"
                           underlineColorAndroid='rgba(0,0,0,0)'
                           value={this.state.password}
                           onChangeText={(password) => this.setState({password})}
                       />
                    </View>
                   <View style={styles.forgotContainer}>
                       <Text style={styles.greyFont}>Forgot Password</Text>
                   </View>
               </View>
              <TouchableOpacity onPress={() => alert('Hello')}>
                 <View style={styles.signin}>
                     <Text style={styles.whiteFont}>Sign In</Text>
                 </View>
               </TouchableOpacity>

               <View style={styles.signup}>
                   <Text style={styles.greyFont}>Don't have an account?<Text style={styles.whiteFont}>  Sign Up</Text></Text>
               </View>
           </View>
       );
   }
}

var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'grey'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
    signin: {
        backgroundColor: '#006699',
        padding: 20,
        alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        flex: .25
    },
    inputPassword: {
        marginLeft: 15,
        width: 20,
        height: 21,
        marginTop: 10
    },
    inputUsername: {
      marginLeft: 15,
      width: 20,
      height: 20,
      marginTop: 10
    },
    inputContainer: {
        height: 55,
        padding: 10,
        borderWidth: 0,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        width: 280,
        height: 50,
        fontSize: 20,
        backgroundColor: 'white',
        textAlignVertical: 'center'
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#FFF'
    }
});

export default Networking;
