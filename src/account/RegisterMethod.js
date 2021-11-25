import React from 'react';
import {StyleSheet, View, Text,StatusBar,Image,TouchableOpacity} from 'react-native';
import {Container,Header,Content,Body,Left,Right,Title,Input,Icon,StyleProvider,Spinner,Form, Item, Label } from 'native-base';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import { FloatingLabelInput } from 'react-native-floating-label-input';

import {NavigationActions,StackActions} from 'react-navigation';


export default class RegisterMethod extends React.Component {

constructor(props){
    super(props);
    this.state = {username:"",password:"",loginData:null}
}

handlePress = async() => {

}

render() {

  const { navigate } = this.props.navigation;

    return (
      <StyleProvider style={getTheme(material)}>  
      <Container style = {styles.cont}> 
         
         <Content>
            <Header  style={styles.header} androidStatusBarColor="#fb8c00" androidBarStyle="light-content">
                <Left><Icon name='arrow-back' style={{color:"#000", padding:15}} onPress={() => this.props.navigation.goBack()}/></Left>
                <Right />
            </Header>
             <View style={{marginBottom:50}}>
                <Text style={styles.headerTxt}>Register</Text>
                <Text style={styles.headerTxtDesc}>Please select registration method</Text>  
             </View>
             <View style={styles.loginFormWrapper}>
                 <Form>

                    <TouchableOpacity onPress={() => {navigate('RegisterEmail');}}>
                        <View style={styles.loginBtn}>
                            <Icon name="email" type="Fontisto"/>
                            <Text style={styles.btnTxt}>Register with Email</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigate('RegisterEmail');}}>
                        <View style={styles.loginBtn}>
                            <Icon name="gmail" type="MaterialCommunityIcons"/>
                            <Text style={styles.btnTxt}>Register with Gmail</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigate('RegisterEmail');}}>
                        <View style={styles.loginBtn}>
                            <Icon name="screen-smartphone" type="SimpleLineIcons"/>
                            <Text style={styles.btnTxt}>Register with Phone Number</Text>
                        </View>
                    </TouchableOpacity>

                 </Form>
             </View>
         </Content>            
      </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
    cont:{
        backgroundColor:"#FFF"
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
        borderColor:"#fb8c00",
        borderWidth:1,
        borderRadius:7,
        marginTop:25,
        padding:15,
        flexDirection:"row"
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
        marginLeft:15,
        marginTop:3
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