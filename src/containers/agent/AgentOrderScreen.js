import React from 'react';
import {StyleSheet,Dimensions,Image,View,TouchableOpacity,Alert,Linking} from 'react-native';
import {Icon, Container, Header, Content,Body,Left,Text,Item, Right,StyleProvider,Footer, Button,Input} from 'native-base';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import moment from 'moment';

import { Modalize } from 'react-native-modalize';
import Chat from './Chat'; 
import PlaceOrder from './PlaceOrder';
import { ScrollView } from 'react-native-gesture-handler';

export default class AgentOrdersScreen extends React.Component {

    constructor(props){
        super(props);
        this.state ={
        };
        this.modalizeRef  = React.createRef();
        this.modalizeRef1  = React.createRef();
    }

    callAgent = () => {
        const phoneNumber = '0760287767';
        Linking.canOpenURL(`tel:${phoneNumber}`)
         .then(supported => {
           if (!supported) {
             // handle the error
           } else {
             return Linking.openURL(`tel:${phoneNumber}`);
           }
         })
     }
 
     onOpen = () => {
         this.modalizeRef.current?.open();
     };

     onOpen1 = () => {
        this.modalizeRef1.current?.open();
    };
 
     senMessage = () =>{
         this.onOpen();
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
                    <Body><Text style={styles.title}>Agent Orders</Text></Body>
                    <Right>
                    </Right>          
                </Header>
                <Content>
                    <View style={styles.topWraper}>
                        <Text style={{color:"#fff"}}>Total Float</Text>
                        <Text style={{fontWeight:"bold", color:"#fff",fontSize:22}}>$ 1000.00</Text>
                    </View>
                   
                    <View style={styles.bottomWraper}>
                            <View>
                                <Text style={styles.totals}>$ 89.00</Text>
                                <Text style={styles.totalsTxt}>Pending</Text>
                            </View>
                            <View style={styles.separator}>
                            </View>
                            <View>
                                <Text style={styles.totals}>$ 89.00</Text>
                                <Text style={styles.totalsTxt}> Paid</Text>
                            </View>
                            <View style={styles.separator}>
                            </View>
                            <View>
                                <Text style={styles.totals}>$ 89.00</Text>
                                <Text style={styles.totalsTxt}> Recieved</Text>
                            </View>
                        </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between", marginTop:50, marginBottom:10,marginHorizontal:"3%"}}>
                       <Text style={{fontWeight:"bold", fontSize:19, marginTop:10}}>My Orders (3)</Text>
                       <TouchableOpacity onPress={() => this.onOpen1()}>
                           <Text style={{backgroundColor:"blue", color:"#fff", paddingHorizontal:15, borderRadius:5, paddingVertical:10}}>New Order</Text>
                       </TouchableOpacity>
                    </View>

                    <View style={styles.agentWrapper}>
                        <View style={{paddingVertical:10,paddingHorizontal:15, flexDirection:"row", justifyContent:"space-between"}}>
                            <View>
                                <Text style={styles.amount}>$ 200 <Text style={styles.pending}> Pending </Text></Text>
                                <Text style={{lineHeight:22, fontSize:14}}>Please give $200 to Festos Kampire in Bor from Augusto Fendi (Toronto)</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:"#f9f9f9",paddingHorizontal:15, paddingVertical:12, flexDirection:"row", justifyContent:"space-between"}}>
                            <TouchableOpacity onPress={() => this.callAgent()}>
                                <Text><Icon name='phone-square' type="FontAwesome" style={{fontSize:19, color:"green"}}/> Call Reciever</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.senMessage()}>
                                <Text><Icon name='message' type="Entypo"  style={{fontSize:19, color:"blue"}}/> Chats</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.agentWrapper}>
                        <View style={{paddingVertical:10,paddingHorizontal:15, flexDirection:"row", justifyContent:"space-between"}}>
                            <View>
                                <Text style={styles.amount}>$ 100 <Text style={[styles.pending,{color:"green"}]}> Paid </Text></Text>
                                <Text style={{lineHeight:22, fontSize:14}}>Please give $100 to Festos Kampire in Bor from Augusto Fendi (Toronto)</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:"#f9f9f9",paddingHorizontal:15, paddingVertical:12, flexDirection:"row", justifyContent:"space-between"}}>
                            <TouchableOpacity onPress={() => this.callAgent()}>
                                <Text><Icon name='phone-square' type="FontAwesome" style={{fontSize:19, color:"green"}}/> Call Reciever</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.senMessage()}>
                                <Text><Icon name='message' type="Entypo"  style={{fontSize:19, color:"blue"}}/> Chats</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.agentWrapper}>
                        <View style={{paddingVertical:10,paddingHorizontal:15, flexDirection:"row", justifyContent:"space-between"}}>
                            <View>
                                <Text style={styles.amount}>$ 100 <Text style={[styles.pending,{color:"blue"}]}> Recieved </Text></Text>
                                <Text style={{lineHeight:22, fontSize:14}}>Please give $100 to Festos Kampire in Bor from Augusto Fendi (Toronto)</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:"#f9f9f9",paddingHorizontal:15, paddingVertical:12, flexDirection:"row", justifyContent:"space-between"}}>
                            <TouchableOpacity onPress={() => this.callAgent()}>
                                <Text><Icon name='phone-square' type="FontAwesome" style={{fontSize:19, color:"green"}}/> Call Reciever</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.senMessage()}>
                                <Text><Icon name='message' type="Entypo"  style={{fontSize:19, color:"blue"}}/> Chats</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Content>
                <Modalize 
                    ref={this.modalizeRef}
                    adjustToContentHeight={true}
                   scrollViewProps={{ keyboardShouldPersistTaps: 'handled' }}>
                       <Chat/>
                </Modalize>
                <Modalize 
                    ref={this.modalizeRef1}
                    adjustToContentHeight={true}
                   scrollViewProps={{ keyboardShouldPersistTaps: 'handled' }}>
                       <ScrollView>
                       <PlaceOrder/>
                       </ScrollView>
                </Modalize>
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
        },
        topWraper:{
            backgroundColor:"#fb8c00",
            minHeight:50,
            alignItems:"center",
            padding:10,
            borderBottomWidth:0.5,
            borderBottomColor:"#fff"
        },
        bottomWraper:{
            backgroundColor:"#fb8c00",
            minHeight:50,
            alignItems:"center",
            flexDirection:"row",
            justifyContent:"space-between",
            paddingHorizontal:15,
            paddingVertical:10
        },
        separator:{
            height:25,
            backgroundColor:"#fff",
            width:1
        },
        totals:{
            fontWeight:"bold",
            fontSize:19,
            textAlign:"center",
            color:"#fff"
        },
        totalsTxt:{
            fontSize:16,
            textAlign:"center",
            color:"#fff"
        },
        agentWrapper:{
            backgroundColor:"#fff",
            marginHorizontal:"3%",
            marginBottom:18,
            borderRadius:5
        },
        itemHeader:{
           borderColor:"#ddd",
           borderRadius:5,
           marginBottom:15
        },
        input:{
           borderRadius:5,
           color:"#000",
           backgroundColor:"#fff",
           fontSize:16
        },
        amount:{
            textTransform:"uppercase",
            fontWeight:"bold",
            fontSize:19,
            marginBottom:5,
        },
        town:{
            color:"#666",
            fontSize:14
        },
        pending:{
            color:"#f00",
            fontSize:10,
            paddingVertical:2,
            fontWeight:"normal",
            marginTop:5,
        }
    }
    )