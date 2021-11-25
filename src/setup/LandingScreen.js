import React from 'react';
import {StyleSheet, View, Text,StatusBar,TouchableOpacity,Image} from 'react-native';
import {Container,StyleProvider,Content} from 'native-base';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Indicator, Pages } from 'react-native-pages'; 
import SplashScreen from 'react-native-splash-screen';

export default class LandingScreen extends React.Component {

constructor(props){
    super(props);
    this.state = {phoneNumber: ''}

    SplashScreen.hide();
}

render() {
    const { navigate } = this.props.navigation;

    return (
      <StyleProvider style={getTheme(material)}>  
      <Container style = {styles.cont}> 
      <StatusBar backgroundColor="#fb8c00" barStyle="light-content"/>
        <Grid style={{flexDirection:"column"}}>
            <Row>

                <Pages
                animate= {true}
                indicatorSize={50}
                delay= {2000}
                indicatorColor="#000"> 
                   <View>
                        <View style={styles.imageContainer}>
                            <Image resizeMode="contain" style={[styles.landImage,{width:"70%",height:"85%", marginTop:55}]} source={require('../../assets/images/mobile-wallet.jpeg')}/> 
                        </View>   
                        <Text style={styles.textB}>Welcome to Pesabase</Text>  
                        <Text style={styles.textC}>Fast and secure money transfer solution based on Blockchain. </Text>  
                   </View>
                   <View>
                        <View style={styles.imageContainer}>
                            <Image resizeMode="stretch" style={[styles.landImage,{width:"50%",height:"65%", marginTop:85}]} source={require('../../assets/images/money_transfer1.png')}/> 
                        </View> 
                        <Text style={styles.textB}>Low Fees, Fast Remitance</Text>    
                        <Text style={styles.textC}>Fast and secure money transfer solution based on Blockchain. </Text>  
                   </View>
                   <View>
                        <View style={styles.imageContainer}>
                            <Image resizeMode="stretch" style={[styles.landImage,{width:"50%",height:"65%", marginTop:95, marginLeft:30}]} source={require('../../assets/images/payments.jpeg')}/> 
                        </View>   
                        <Text style={styles.textB}>Payments Services</Text>    
                        <Text style={styles.textC}>Easily make payments to businesses for bills and services across Africa </Text> 
                   </View>
                   <View>
                        <View style={styles.imageContainer}>
                            <Image resizeMode="contain"style={[styles.landImage,{width:"70%",height:"85%", marginTop:55}]} source={require('../../assets/images/agents.jpeg')}/> 
                        </View>   
                        <Text style={styles.textB}>Locate and Access Agents</Text>    
                        <Text style={styles.textC}>Easily locate and access our mobile money agents around you. </Text> 
                   </View>
                </Pages>
            </Row>
            <Row style={styles.buttonsWrapper}>
                <Col>
                    <TouchableOpacity onPress={() => {navigate('LoginScreen');}}  underlayColor={'transparent'}>
                        <View style={[styles.button,{borderColor:"#fb8c00",backgroundColor:"#ffff",borderWidth:1,paddingHorizontal:30}]} >
                            <Text style={[styles.buttonText,{color:"#fb8c00"}]}>Sign In </Text>
                        </View>
                    </TouchableOpacity>
                </Col>
                <Col>
                   <TouchableOpacity onPress={() => {navigate('RegisterMethod');}}  underlayColor={'transparent'}>
                        <View style={styles.button} >
                            <Text style={styles.buttonText}>Create Account</Text>
                        </View>
                    </TouchableOpacity>
                </Col>
            </Row>
        </Grid>
      </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
    cont:{
        backgroundColor: "#fff"
    },
    buttonsWrapper:{
        height:120,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:"5%"
    },
    imageContainer:{
        width:"100%",
        height:"70%",
        alignItems:"center"
     },
     landImage:{
       width:"100%",
       height:"100%"
     },
      textB:{
          fontWeight:"bold",
          marginHorizontal:"10%",
          color:"#000",
          fontSize:20,
          marginBottom:10,
          marginTop:15,
          textAlign:"center"
      },
      textC:{
        color:"#000",
        fontSize:16,
        marginHorizontal:"10%",
        marginBottom:25,
        textAlign:"center",
        lineHeight:25
    },
    button:{
       alignSelf:"center",
       backgroundColor:"#fb8c00",
       borderRadius:8,
       alignItems: 'center', 
       paddingHorizontal:10
    },
    buttonText:{
      color:'#000',
      paddingVertical:13,
      paddingHorizontal:12,
      fontSize:16,
      textAlign:"center",
      fontWeight:"bold"
    },
})