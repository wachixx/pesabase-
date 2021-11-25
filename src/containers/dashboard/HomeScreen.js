import React from 'react';
import {StyleSheet,Dimensions,Image,View,TouchableOpacity,Alert,Linking} from 'react-native';
import {Icon, Container, Header, Content,Body,Left,Text,Item, Right,StyleProvider,Footer, Button,Input} from 'native-base';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import moment from 'moment';

import { Modalize } from 'react-native-modalize';

export default class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.modalizeRef  = React.createRef();
        this.modalizeRef1  = React.createRef();
        this.modalizeRef2  = React.createRef();
    }

    onOpen = () => {
        this.modalizeRef.current?.open();
    };
    onOpen1 = () => {
        this.modalizeRef1.current?.open();
    };
    onOpen2 = () => {
        this.modalizeRef2.current?.open();
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <StyleProvider style={getTheme(material)}>  
                <Container style = {styles.cont}> 
                <Content>
                    <View style={styles.balanceWrapper}> 
                      <Text style={styles.balanceTxt}>$ 0.<Text style={{fontWeight:"bold"}}>00</Text></Text>
                      <Text style={{fontSize:14, marginBottom:20}}>Wallet Balance</Text>
                      <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
                           <TouchableOpacity onPress={() => this.onOpen()}>
                                <View style={styles.actionBtn}>
                                    <Icon type="AntDesign" style={[styles.actionBtnTxt,{color:"green"}]} name="plus"/>
                                    <Text style={[styles.actionBtnT,{color:"green"}]}>Fund</Text>
                                </View>
                           </TouchableOpacity>
                           <TouchableOpacity onPress={() => this.onOpen1()}>
                                <View style={styles.actionBtn}>
                                <Icon type="Feather" style={[styles.actionBtnTxt,{color:"red"}]} name="send"/>
                                    <Text style={[styles.actionBtnT,{color:"red"}]}>Send</Text>
                                </View>
                           </TouchableOpacity>
                           <TouchableOpacity onPress={() => this.onOpen2()}>
                                <View style={styles.actionBtn}>
                                    <Icon type="Feather" style={[styles.actionBtnTxt,{color:"blue"}]} name="arrow-up-right"/>
                                    <Text style={[styles.actionBtnT,{color:"blue"}]}>Request</Text>
                                </View>
                           </TouchableOpacity>
                      </View>
                   </View>
                
                    <View style={styles.wrapper}>
                        <Text style={{fontWeight:"bold", fontSize:16}}>Wallets</Text>
                        <View style={styles.walletsWrapper}>
                            <View style={styles.wallet}>
                            <TouchableOpacity onPress={() => {navigate('MpesaScreen');}}  >
                                <View>
                                    <Image resizeMode="contain" style={{width:"75%", height:"75%"}} source={require('../../../assets/images/saf_logo.png')}/> 
                                    <Text style={styles.walletTxt}>Mpesa</Text>
                                </View>
                            </TouchableOpacity>
                            </View>
                                <View style={styles.wallet}>
                                <TouchableOpacity onPress={() => {navigate('MTNScreen');}}  >
                                 <View >
                                    <Image resizeMode="contain" style={{width:"75%", height:"75%"}} source={require('../../../assets/images/mtn_mobile_money.png')}/> 
                                    <Text style={styles.walletTxt}>MTN</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.wallet}>
                                <TouchableOpacity onPress={() => {navigate('CryptoScreen');}}  >
                                <View>
                                    <Image resizeMode="contain" style={{width:"75%", height:"75%"}} source={require('../../../assets/images/celo_logo.png')}/> 
                                    <Text style={styles.walletTxt}>Crypto</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.wrapper,{marginBottom:100}]}>
                        <Text style={{fontWeight:"bold",fontSize:16}}>Transaction History</Text>
                        <View style={styles.transactionWrapper}>
                            
                            <View style={styles.transaction}>
                                <View>
                                    <Text style={styles.transactionDesc}>Deposit</Text>
                                    <Text note style={styles.transNote}>May 5, 2020, 5.00pm</Text>
                                </View>
                                <Text style={styles.amountTxtIn}>- $ 100.00</Text>
                            </View>

                            <View style={styles.transaction}>
                                <View>
                                    <Text style={styles.transactionDesc} numberOfLines={1}>Send to Julius </Text>
                                    <Text note style={styles.transNote}>May 5, 2020, 5.00pm</Text>
                                </View>
                                <Text style={styles.amountTxtOut}>- $ 100.00</Text>
                            </View>
                            <View style={styles.transaction}>
                                <View>
                                    <Text style={styles.transactionDesc} numberOfLines={1}>Deposit</Text>
                                    <Text note style={styles.transNote}>May 5, 2020, 5.00pm</Text>
                                </View>
                                <Text style={styles.amountTxtIn}>- $ 100.00</Text>
                            </View>

                            <View style={styles.transaction}>
                                <View>
                                    <Text style={styles.transactionDesc} numberOfLines={1}>Send to Julius </Text>
                                    <Text note style={styles.transNote}>May 5, 2020, 5.00pm</Text>
                                </View>
                                <Text style={styles.amountTxtOut}>- $ 100.00</Text>
                            </View>
                        </View>
                    </View>
            </Content>
            <Modalize 
                    ref={this.modalizeRef}
                    adjustToContentHeight={true}
                   scrollViewProps={{ keyboardShouldPersistTaps: 'handled' }}>
                        <View style={{marginTop:"5%"}}>
                           <View style={styles.menuContainer}>
                                <Image resizeMode="contain" style={{width:30, height:30,marginRight:15}} source={require('../../../assets/images/saf_logo.png')}/> 
                                <Text style={styles.menuText}>
                                    Deposit with Mpesa
                                </Text>
                                <Icon type="FontAwesome" name="angle-right" style={styles.carretIcon}></Icon>
                            </View>
                            <View style={styles.menuContainer}>
                                <Image resizeMode="contain" style={{width:30, height:30,marginRight:15}} source={require('../../../assets/images/mtn_mobile_money.png')}/> 
                                <Text style={styles.menuText}>
                                    Deposit with MTN Money
                                </Text>
                                <Icon type="FontAwesome" name="angle-right" style={styles.carretIcon}></Icon>
                            </View>
                            <View style={styles.menuContainer}>
                                <Image resizeMode="contain" style={{width:30, height:30,marginRight:15}} source={require('../../../assets/images/celo_logo.png')}/> 
                                <Text style={styles.menuText}>
                                    Deposit with Crypto
                                </Text>
                                <Icon type="FontAwesome" name="angle-right" style={styles.carretIcon}></Icon>
                            </View>
                        </View>   
            </Modalize>
            <Modalize 
                    ref={this.modalizeRef1}
                    adjustToContentHeight={true}
                   scrollViewProps={{ keyboardShouldPersistTaps: 'handled' }}>
                        <View style={{marginTop:"5%"}}>
                           <TouchableOpacity onPress={() => {navigate('SearchUserScreen');}} >
                           <View style={styles.menuContainer}>
                                <Icon type="MaterialCommunityIcons" name="account-search" style={[styles.menuIcon,{color:"red"}]}></Icon>
                                <Text style={styles.menuText}>
                                    Search reciever from Pesabase
                                </Text>
                                <Icon type="FontAwesome" name="angle-right" style={styles.carretIcon}></Icon>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {navigate('ContactScreen');}} >
                            <View style={styles.menuContainer}>
                                <Icon type="MaterialCommunityIcons" name="card-search-outline" style={[styles.menuIcon,{color:"red"}]}></Icon>
                                <Text style={styles.menuText}>
                                    Search reciever from your contacts
                                </Text>
                                <Icon type="FontAwesome" name="angle-right" style={styles.carretIcon}></Icon>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {navigate('SearchUserScreen');}} >
                            <View style={styles.menuContainer}>
                                <Icon type="MaterialCommunityIcons" name="account-group-outline" style={[styles.menuIcon,{color:"red"}]}></Icon>
                                <Text style={styles.menuText}>
                                    Send through a Pesabase agent
                                </Text>
                                <Icon type="FontAwesome" name="angle-right" style={styles.carretIcon}></Icon>
                            </View>
                            </TouchableOpacity>
                        </View>
            </Modalize>
            <Modalize 
                    ref={this.modalizeRef2}
                    adjustToContentHeight={true}
                   scrollViewProps={{ keyboardShouldPersistTaps: 'handled' }}>
                       <View style={{marginTop:"5%"}}>
                           <TouchableOpacity onPress={() => {navigate('SearchUserScreen');}} >
                           <View style={styles.menuContainer}>
                           <Icon type="MaterialCommunityIcons" name="account-search" style={[styles.menuIcon,{color:"blue"}]}></Icon>
                                <Text style={styles.menuText}>
                                    Search from Pesabase
                                </Text>
                                <Icon type="FontAwesome" name="angle-right" style={styles.carretIcon}></Icon>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {navigate('ContactScreen');}} >
                            <View style={styles.menuContainer}>
                                <Icon type="MaterialCommunityIcons" name="card-search-outline" style={[styles.menuIcon,{color:"blue"}]}></Icon>
                                <Text style={styles.menuText}>
                                    Search from your contacts
                                </Text>
                                <Icon type="FontAwesome" name="angle-right" style={styles.carretIcon}></Icon>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {navigate('SearchUserScreen');}} >
                            <View style={styles.menuContainer}>
                                <Icon type="MaterialCommunityIcons" name="account-group-outline" style={[styles.menuIcon,{color:"blue"}]}></Icon>
                                <Text style={styles.menuText}>
                                    Request through a Pesabase agent
                                </Text>
                                <Icon type="FontAwesome" name="angle-right" style={styles.carretIcon}></Icon>
                            </View>
                            </TouchableOpacity>
                       </View>      
            </Modalize>
                </Container>
            </StyleProvider>
        )
      }
    }
    
    
const styles = StyleSheet.create({
          cont:{
            backgroundColor:"#f1f1f1"
          },
          balanceWrapper:{
              marginHorizontal:"3%",
              backgroundColor:"#fb8c00",
              borderRadius:5,
              alignItems:"center",
              padding:15,
              marginTop:20
          },
          balanceTxt:{
              fontSize:30,
              fontWeight:"bold"
          },
          actionBtn:{
              backgroundColor:"#fff",
              paddingHorizontal:8,
              width:90,
              paddingVertical:10,
              borderRadius:3,
              alignItems:"center",
              flexDirection:"row",
              marginRight:3
          },
          actionBtnTxt:{
              fontSize:18,
              marginRight:5
          },
          actionBtnT:{
              fontSize:14,
              fontWeight:"bold"
          },
          wrapper:{
            marginHorizontal:"3%",
            marginTop:30
          },
          walletsWrapper:{
              marginTop:5,
              flexDirection:"row",
          },
          walletTxt:{
              fontSize:14,
              marginTop:4,
              textAlign:"center"
          },
          wallet:{
              backgroundColor:"#fff",
              width:"30.8%",
              marginRight:"3.8%",
              aspectRatio:1,
              padding:10,
              alignItems:"center",
              justifyContent:"center",
              borderRadius:5
          },
          transactionWrapper:{
              backgroundColor:"#fff",
              paddingHorizontal:15,
              borderRadius:3,
              marginTop:5
          },
          transaction:{
              flexDirection:"row",
              justifyContent:"space-between",
              borderBottomWidth:1,
              borderBottomColor:"#f1f1f1",
              paddingVertical:15
          },
          transactionDesc:{
              fontSize:16
          },
          amountTxtIn:{
              fontWeight:"bold",
              color:"green"
          },
          amountTxtOut:{
              fontWeight:"bold",
              color:"red"
          },
          transNote:{
              fontSize:12
          },
        menuContainer:{
            backgroundColor:"#f1f1f1",
            paddingVertical:15,
            paddingHorizontal:20,
            marginBottom:1,
            marginHorizontal:"4%",
            flexDirection:"row",
            position:"relative"
        },
          menuIcon:{
              color:"green",
              marginRight:15
          },
          menuText:{
              marginTop:4,
          },
          carretIcon:{
              position:"absolute",
              top:"45%",
              right:"7%",
              color:"#ccc"
          }
})
