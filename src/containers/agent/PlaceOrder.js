import React from 'react';
import {StyleSheet,Dimensions,Image,View,TouchableOpacity,Alert,Linking} from 'react-native';
import {Icon, Container, Header, Content,Body,Left,Text,Item, Right,StyleProvider,Footer, Label,Input} from 'native-base';

import PhoneInput from 'react-native-phone-input';

export default class PlaceOrder extends React.Component {

    constructor(props){
        super(props);
        this.state ={
        };
    }

    render() {
        return(
            <View>
           <View style={styles.formWrapper}>
                                <View  style={styles.textIn}>   
                                    <Label style={styles.label}>Sender Name</Label>
                                    <Item regular style={styles.itemHeader}>
                                        <Input style={styles.input} autoCapitalize="sentences" onChangeText={firstName => this.setState({firstName})}  
                                        value={this.state.firstName}
                                        />
                                    </Item>
                                </View>
                                <View  style={styles.textIn} >
                                    <Label style={styles.label}>Sender City/Location</Label>
                                    <Item regular style={styles.itemHeader} >
                                    <Input style={styles.input} autoCapitalize="sentences"  onChangeText={lastName => this.setState({lastName})} 
                                        value={this.state.lastName}
                                        />
                                    </Item>
                                </View>
                                <Text style={{marginHorizontal:"5%",marginTop:20}}>Sender Phone Number</Text>
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
                                <View  style={styles.textIn}>
                                        <Label style={styles.label}>Recievers Name</Label>
                                        <Item regular style={styles.itemHeader} >
                                        <Input style={styles.input}  autoCompleteType="email" onChangeText={email => this.setState({email})}
                                        value={this.state.email}/>

                                        </Item>
                                </View>
                                <View  style={styles.textIn}>
                                        <Label style={styles.label}>Recievers City/Town/Location</Label>
                                        <Item regular style={styles.itemHeader} >
                                        <Input style={styles.input}  autoCompleteType="email" onChangeText={email => this.setState({email})}
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
                               
                                <View  style={styles.textIn}>
                                        <Label style={styles.label}>Amount</Label>
                                        <Item regular style={styles.itemHeader} >
                                        <Input style={styles.input} keyboardType="numeric" onChangeText={email => this.setState({email})}
                                        value={this.state.email}/>

                                        </Item>
                                </View>
                                

                              

                            </View>

                            <TouchableOpacity onPress={() =>{this.handlePress();}}>
                        <View style={styles.loginBtn}>
                            <Text style={styles.btnTxt}>Apply</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                 )
                }
            }
           
            const styles = StyleSheet.create({ 
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
                    marginHorizontal:"4%",
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
                     