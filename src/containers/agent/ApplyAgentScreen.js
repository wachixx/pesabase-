import React from 'react';
import {StyleSheet,Dimensions,Image,View,TouchableOpacity,Alert,Linking} from 'react-native';
import {Icon, Container, Header, Content,Body,Left,Text,Item, Right,StyleProvider,Label, Button,Input} from 'native-base';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import moment from 'moment';
import PhoneInput from 'react-native-phone-input';

export default class ApplyAgentScreen extends React.Component {

    constructor(props){
        super(props);
        this.state ={
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <StyleProvider style={getTheme(material)}>
            <Container style = {styles.cont}>
                <Header style={styles.header}  androidStatusBarColor="#d47600" androidBarStyle="light-content" hasTabs>
                    <Left>
                        <Icon name='arrow-left' type="Feather" style={{color:"#FFF", paddingHorizontal:15}} onPress={() => this.props.navigation.goBack()}/>
                    </Left>
                    <Body><Text style={styles.title}>Agent Application</Text></Body>
                    <Right>
                    </Right>          
                </Header>
                <Content style={{paddingTop:15}}>

                <View style={styles.formWrapper}>
                                <View  style={styles.textIn}>   
                                    <Label style={styles.label}>First Name</Label>
                                    <Item regular style={styles.itemHeader}>
                                        <Input style={styles.input} autoCapitalize="sentences" onChangeText={firstName => this.setState({firstName})}  
                                        value={this.state.firstName}
                                        />
                                    </Item>
                                </View>
                                <View  style={styles.textIn} >
                                    <Label style={styles.label}>Last Name</Label>
                                    <Item regular style={styles.itemHeader} >
                                    <Input style={styles.input} autoCapitalize="sentences"  onChangeText={lastName => this.setState({lastName})} 
                                        value={this.state.lastName}
                                        />
                                    </Item>
                                </View>
                                <View  style={styles.textIn}>
                                        <Label style={styles.label}>Email Address</Label>
                                        <Item regular style={styles.itemHeader} >
                                        <Input style={styles.input} keyboardType="email-address" autoCompleteType="email" onChangeText={email => this.setState({email})}
                                        value={this.state.email}/>

                                        </Item>
                                </View>
                                <View  style={styles.textIn}>
                                        <Label style={styles.label}>Country</Label>
                                        <Item regular style={styles.itemHeader} >
                                        <Input style={styles.input} keyboardType="email-address" autoCompleteType="email" onChangeText={email => this.setState({email})}
                                        value={this.state.email}/>

                                        </Item>
                                </View>
                                <View  style={styles.textIn}>
                                        <Label style={styles.label}>City</Label>
                                        <Item regular style={styles.itemHeader} >
                                        <Input style={styles.input} keyboardType="email-address" autoCompleteType="email" onChangeText={email => this.setState({email})}
                                        value={this.state.email}/>

                                        </Item>
                                </View>
                                <View  style={styles.textIn}>
                                        <Label style={styles.label}>Location</Label>
                                        <Item regular style={styles.itemHeader} >
                                        <Input style={styles.input} keyboardType="email-address" autoCompleteType="email" onChangeText={email => this.setState({email})}
                                        value={this.state.email}/>

                                        </Item>
                                </View>
                                <View  style={styles.textIn}>
                                        <Label style={styles.label}>Give a descriprion of your location</Label>
                                        <Item regular style={styles.itemHeader} >
                                        <Input style={styles.input} keyboardType="email-address" autoCompleteType="email" onChangeText={email => this.setState({email})}
                                        value={this.state.email}/>

                                        </Item>
                                </View>
                                <Text style={{marginHorizontal:"5%",marginTop:20}}>Contact Phone Number</Text>
                                <View style={[styles.textIn,{marginTop:0}]}>
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

                              

                            </View>

                            <TouchableOpacity onPress={() =>{this.handlePress();}}>
                        <View style={styles.loginBtn}>
                            <Text style={styles.btnTxt}>Apply</Text>
                        </View>
                    </TouchableOpacity>
                     
                </Content>
                </Container>
            </StyleProvider>
            )
        }
    }
   
    const styles = StyleSheet.create({ 
        header: {
            backgroundColor: "#fb8c00",
        }, 
        cont:{
            backgroundColor:"#f1f1f1"
        },
        title:{
            color:"#fff",
            fontWeight:"bold"
        }
        ,
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
    },
    formWrapper:{
        backgroundColor:"#fff",
        padding:15,
        borderRadius:10,
        marginBottom:25,
        marginHorizontal:"4%"
    },
    textIn:{
        marginHorizontal: "5%",
        marginBottom:5,
        marginTop:15
    },
    label:{
        marginBottom:5, fontSize:15
    },
    itemHeader:{
       borderColor:"#ddd",borderRadius:5
    },
    input:{
       borderRadius:5,
       color:"#000"
    },
    phoneTermsOuter:{
        fontSize:14,
        marginTop:10,
        marginBottom:10,
        textAlign:"center",
        lineHeight:24,
        color:"#000"
    },
    loginBtn:{
        backgroundColor:"#fb8c00",
        borderRadius:7,
        marginTop:5,
        alignItems:"center",
        padding:15,
        marginHorizontal:"3%",
        marginBottom:45
    },
    btnTxt:{
        fontSize:16,
        color:"#fff"
    },

    }
    )