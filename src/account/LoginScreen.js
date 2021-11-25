import React from 'react';
import {StyleSheet, View, Text,StatusBar,Image,TouchableOpacity} from 'react-native';
import {Container,Header,Content,Body,Left,Right,Title,Input,Icon,StyleProvider,Spinner,Form, Item, Label } from 'native-base';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import { FloatingLabelInput } from 'react-native-floating-label-input';

import {NavigationActions,StackActions} from 'react-navigation';


export default class LoginScreen extends React.Component {

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
                <Text style={styles.headerTxt}>LOGIN</Text>
                <Text style={styles.headerTxtDesc}>Please login to continue</Text>  
             </View>
             <View style={styles.loginFormWrapper}>
                 <Form>
                 <View>
                    <FloatingLabelInput
                        label="Phone Number or Email Address"
                        staticLabel
                        value={this.state.username}
                        hintTextColor={'#aaa'}
                        containerStyles={styles.containerStyle}
                        customLabelStyles={styles.customLabelStyles}
                        labelStyles={styles.labelStyles}
                        inputStyles={styles.inputStyles}
                        onChangeText={username => this.setState({username})}
                    />
                    </View>
                    <View>
                    <FloatingLabelInput
                        label="Password"
                        staticLabel
                        hintTextColor={'#aaa'}
                        isPassword
                        value={this.state.password}
                        containerStyles={styles.containerStyle}
                        customLabelStyles={styles.customLabelStyles}
                        labelStyles={styles.labelStyles}
                        inputStyles={styles.inputStyles}
                        onChangeText={password => this.setState({password})}
                        customShowPasswordComponent={<Text>Show</Text>}
                        customHidePasswordComponent={<Text>Hide</Text>}
                    />
                    </View>
                    <TouchableOpacity>
                        <Text style={{textAlign:"right"}}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigate('ConfirmCodeScreen');}}>
                        <View style={styles.loginBtn}>
                            <Text style={styles.btnTxt}>Login</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.orView}>
                        <Text style={styles.orTxt}>Or</Text>
                    </View>

                    <Text style={{textAlign:"center", color:"#776B6B"}}>Sign in with</Text>

                    <View style={styles.outhSignIn}>
                         <Icon style={{color:"#db4a39", fontSize:45}} name="google-plus-circle" type="FontAwesome"></Icon>
                         <Icon style={{color:"#3b5998", fontSize:42}} name="facebook-with-circle" type="Entypo"></Icon>
                    </View>

                    <TouchableOpacity onPress={() => {navigate('RegisterScreen');}}>
                        <Text style={styles.bottomTxt}>Not a member yet? Create Account</Text>
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