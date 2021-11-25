import React from 'react';
import {StyleSheet, View, Text,StatusBar,Image,TouchableOpacity} from 'react-native';
import {Container,Header,Content,Body,Left,Right,Title,Input,Icon,StyleProvider,Spinner,Form, Item, Label } from 'native-base';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import PINCode, {
    hasUserSetPinCode,
    resetPinCodeInternalStates,
    deleteUserPinCode,
  } from "@haskkor/react-native-pincode";

export default class PinScreen extends React.Component {

constructor(props){
    super(props);
    this.state = {username:"",password:"",code:null}
}

_finishProcess = async () => {
    this.props.navigation.navigate("MainSCreen")
}

render() {

  const { navigate } = this.props.navigation;

    return (
      <StyleProvider style={getTheme(material)}>  
      <Container style = {styles.cont}> 
    
             <PINCode
              status="choose"
              touchIDDisabled={true}
              finishProcess={() => this._finishProcess()}
            />        
      </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
    cont:{
        backgroundColor:"#FFF",

    },
    header:{
        backgroundColor:"#fff",
        elevation: 0
    },
    headerTxt:{
        fontSize:20,
        marginHorizontal:"5%",
        marginTop:20
    },
    headerTxtDesc:{
        fontSize:15,
        marginHorizontal:"5%",
    },
    loginFormWrapper:{
        minHeight:500,
        width:"100%",
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        backgroundColor:"#fff",
        paddingHorizontal:"7%",
        paddingTop:50

    },
    formFields:{
        marginBottom:17,
        borderColor:"#000",
        borderRadius:7,
        borderWidth:0.5,
        paddingHorizontal:10
    },
    loginBtn:{
        backgroundColor:"#fb8c00",
        borderRadius:7,
        marginTop:25,
        alignItems:"center",
        padding:15
    },
    orView:{
        height:1,backgroundColor:"#000",marginHorizontal:"13%", marginTop:45,marginBottom:35, position:"relative"
    },
    orTxt:{
        backgroundColor:"#fff",width:40, textAlign:"center", left:"45%",top:-10, position:"absolute"
    },
    outhSignIn:{
        marginVertical:15,
        flexDirection:"row",
        width:95,
        justifyContent:"space-between",
        alignSelf:"center"
    },
    btnTxt:{
        fontSize:16,
        color:"#fff"
    },
    bottomTxt:{
        textAlign:"center",
        marginTop:10,
        marginBottom:20
    },
    containerStyle:{
        borderWidth: 2,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom:15
    },
    customLabelStyles:{
        color: 'red',
        fontSize: 12,
    },
    labelStyles:{
        backgroundColor: '#fff',
        paddingHorizontal: 5,
    },
    inputStyles:{
        color: 'blue',
        paddingHorizontal: 10,
    }
 });