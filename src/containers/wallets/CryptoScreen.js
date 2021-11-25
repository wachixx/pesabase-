import React from 'react';
import {StyleSheet,Dimensions,Image,View,TouchableOpacity,Alert,Linking} from 'react-native';
import {Icon, Container, Header, Content,Body,Left,Text,Item, Right,StyleProvider,Footer, Button,Input} from 'native-base';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import moment from 'moment';

export default class MpesaScreen extends React.Component {

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

                <Body><Text style={styles.title}>Crypto</Text></Body>
                
                <Right>
                </Right>          
                </Header>
                <Content style={{paddingTop:15}}>

                    <View style={styles.menuContainer}>
                        <Text style={styles.menuText}>
                            Deposit with Bitcoin
                        </Text>
                        <Icon type="FontAwesome" name="angle-right" style={styles.carretIcon}></Icon>
                    </View>
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuText}>
                            Withdraw to Bitcoin
                        </Text>
                        <Icon type="FontAwesome" name="angle-right" style={styles.carretIcon}></Icon>
                    </View>
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuText}>
                            Deposit with USDT
                        </Text>
                        <Icon type="FontAwesome" name="angle-right" style={styles.carretIcon}></Icon>
                    </View>
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuText}>
                            Withdraw USDT
                        </Text>
                        <Icon type="FontAwesome" name="angle-right" style={styles.carretIcon}></Icon>
                    </View>

                    <View style={styles.wrapper}>
                        <View style={[styles.wrapper,{marginBottom:100}]}>
                            <Text style={{fontWeight:"bold",fontSize:16}}>Crypto Transactions</Text>
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
                                    <Text style={styles.transactionDesc} numberOfLines={1}>Send to 0723662556 </Text>
                                    <Text note style={styles.transNote}>May 5, 2020, 5.00pm</Text>
                                </View>
                                <Text style={styles.amountTxtOut}>- $ 100.00</Text>
                            </View>
                            </View>
                        </View>
                    </View>

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
        menuContainer:{
            backgroundColor:"#fff",
            paddingVertical:15,
            paddingHorizontal:20,
            marginBottom:1,
            marginHorizontal:"4%",
            flexDirection:"row",
            position:"relative"
        },
        title:{
            color:"#fff",
            fontWeight:"bold"
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
        },
        wrapper:{
          marginHorizontal:"3%",
          marginTop:30
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
    }
    )