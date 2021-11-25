import React from 'react';
import {StyleSheet, View, Text,StatusBar,Image,TouchableOpacity} from 'react-native';
import {Container,Header,Content,Body,Left,Right,Title,Input,Icon,StyleProvider,Spinner,Form, Item, Label } from 'native-base';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import { FloatingLabelInput } from 'react-native-floating-label-input';

import {NavigationActions,StackActions} from 'react-navigation';

import PhoneInput from 'react-native-phone-input';


export default class RegisterEmail extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            currentPosition:0,
            defaultCountry:"ke", 
            checked:false, 
            username:"",password:""}
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
                <Text style={styles.headerTxtDesc}>Please provide the following to continue</Text>  
             </View>
             <View style={styles.loginFormWrapper}>
                 <Form>
                 <View>
                    <FloatingLabelInput
                        label="Email Address"
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
                    <Text style={{marginTop:20}}>Phone Number</Text>  
                    <View style={[styles.textIn,{marginTop:0, marginBottom:30}]}>
                                        <PhoneInput 
                                        initialCountry="ke" 
                                        style={{marginTop:10, paddingVertical:12, paddingHorizontal:10, borderWidth:1, borderColor:"#ddd",color:"#000", borderRadius:5}} 
                                        allowZeroAfterCountryCode={false}  
                                        onChangePhoneNumber={phoneNumber => this.setState({ phoneNumber })}
                                        value={this.state.phoneNumber}
                                        initialCountry={this.state.defaultCountry} 
                                        textStyle={{color:"#000"}}
                                        ref={ref => {this.phone = ref;}}
                                        />
                                </View>

                    <View>
                    <FloatingLabelInput
                        label="First name"
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
                        label="Last name"
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
                    <View>
                    <FloatingLabelInput
                        label="Confirm Password"
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

                    <TouchableOpacity onPress={() => {navigate('ConfirmCodeScreen1');}}>
                        <View style={styles.loginBtn}>
                            <Text style={styles.btnTxt}>Register</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {navigate('LoginScreen');}}>
                        <Text style={styles.bottomTxt}>Have an account? Sign in</Text>
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
        marginTop:20,
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