import React from 'react';
import {StyleSheet,Dimensions,Image,View,TouchableOpacity,Alert,Linking} from 'react-native';
import {Icon, Container, Header, Content,Body,Left,Text,Item, Right,StyleProvider,Footer, Button,Input} from 'native-base';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import moment from 'moment';

export default class ActivityScreen extends React.Component {

    render() {

        const { navigate } = this.props.navigation;

        return (
            <StyleProvider style={getTheme(material)}>  
                <Container style = {styles.cont}> 
                    <Content>
                        <Text style={{marginTop:45,fontWeight:"bold", fontSize:15, marginHorizontal:"3%", marginBottom:5}}>Activities</Text>
                        <View style={styles.topWraper}>
                           <Text>Total Transactions</Text>
                           <Text style={{fontWeight:"bold", fontSize:19}}>$ 0.00</Text>
                        </View>
                        <View style={styles.bottomWraper}>
                            <View>
                                <Text style={styles.totals}>$ 89.00</Text>
                                <Text style={styles.totalsTxt}>Balance</Text>
                            </View>
                            <View style={styles.separator}>
                            </View>
                            <View>
                                <Text style={styles.totals}>$ 89.00</Text>
                                <Text style={styles.totalsTxt}> Send</Text>
                            </View>
                            <View style={styles.separator}>
                            </View>
                            <View>
                                <Text style={styles.totals}>$ 89.00</Text>
                                <Text style={styles.totalsTxt}> Recieved</Text>
                            </View>
                        </View>

                        <Text style={{marginHorizontal:"3%", fontWeight:"bold", fontSize:15, marginTop:30}}>Activity List</Text>
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
                                    <Text style={styles.transactionDesc} numberOfLines={1}>Send to Julius (+254726556565)</Text>
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
                                    <Text style={styles.transactionDesc} numberOfLines={1}>Send to Julius (+254726556565)</Text>
                                    <Text note style={styles.transNote}>May 5, 2020, 5.00pm</Text>
                                </View>
                                <Text style={styles.amountTxtOut}>- $ 100.00</Text>
                            </View>
                        </View>


                    </Content>
                </Container>
            </StyleProvider>
       )
    }
}


const styles = StyleSheet.create({
    cont:{
      backgroundColor:"#f1f1f1"
    },
    topWraper:{
        backgroundColor:"#fb8c00",
        minHeight:50,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        marginHorizontal:"3%",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20
    },
    bottomWraper:{
        backgroundColor:"#fff",
        minHeight:50,
        marginHorizontal:"3%",
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5, 
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:15,
        paddingVertical:10
    },
    separator:{
        height:25,
        backgroundColor:"#ccc",
        width:1
    },
    totals:{
        fontWeight:"bold",
        fontSize:18,
        textAlign:"center"
    },
    totalsTxt:{
        fontSize:13,
        textAlign:"center"
    },
    transactionWrapper:{
              backgroundColor:"#fff",
              paddingHorizontal:15,
              marginHorizontal:"3%",
              borderRadius:3,
              marginTop:5,
              marginBottom:100
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
    }
})