import React from 'react';
import {StyleSheet,Dimensions,Image,View,TouchableOpacity,Alert,Linking} from 'react-native';
import {Icon, Container, Header, Content,Body,Left,Text,Item, Right,StyleProvider,Footer, Button,Input} from 'native-base';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import moment from 'moment';
import { Modalize } from 'react-native-modalize';
import Chat from './Chat'; 

export default class FindAgentScreen extends React.Component {

    constructor(props){
        super(props);
        this.state ={
        };
        this.modalizeRef  = React.createRef();
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
                    <Body><Text style={styles.title}>Find an agent</Text></Body>
                    <Right>
                    </Right>          
                </Header>
                <Content style={{paddingTop:15}}>
                    <View style={{marginHorizontal:"4%"}}>
                       <Item regular style={styles.itemHeader} >
                            <Icon name='search' />
                            <Input style={styles.input} placeholder="Search by location or agent name" onChangeText={email => this.setState({email})} value={this.state.searchTxt}/>
                        </Item>
                    </View>
                    <View style={styles.agentWrapper}>
                        <View style={{paddingVertical:10,paddingHorizontal:15, flexDirection:"row", justifyContent:"space-between"}}>
                            <View>
                                <Text style={styles.city}>Juba</Text>
                                <Text>David Aniang</Text>
                            </View>
                            <View>
                                <Text style={styles.town}>Eastleigh Lane</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:"#f9f9f9",paddingHorizontal:15, paddingVertical:12, flexDirection:"row", justifyContent:"space-between"}}>
                            <TouchableOpacity onPress={() => this.callAgent()}>
                                <Text><Icon name='phone-square' type="FontAwesome" style={{fontSize:19, color:"green"}}/>  Call</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.senMessage()}>
                                <Text><Icon name='message' type="Entypo"  style={{fontSize:19, color:"blue"}}/> Send Message</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.agentWrapper}>
                        <View style={{paddingVertical:10,paddingHorizontal:15, flexDirection:"row", justifyContent:"space-between"}}>
                            <View>
                                <Text style={styles.city}>Nairobi</Text>
                                <Text>Charles </Text>
                            </View>
                            <View>
                                <Text style={styles.town}>CBD</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:"#f9f9f9",paddingHorizontal:15, paddingVertical:12, flexDirection:"row", justifyContent:"space-between"}}>
                            <TouchableOpacity onPress={() => this.callAgent()}>
                                <Text><Icon name='phone-square' type="FontAwesome" style={{fontSize:19, color:"green"}}/>  Call</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.senMessage()}>
                                <Text><Icon name='message' type="Entypo"  style={{fontSize:19, color:"blue"}}/> Send Message</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.agentWrapper}>
                        <View style={{paddingVertical:10,paddingHorizontal:15, flexDirection:"row", justifyContent:"space-between"}}>
                            <View>
                                <Text style={styles.city}>Melbourne</Text>
                                <Text>Awino </Text>
                            </View>
                            <View>
                                <Text style={styles.town}>Harambee Avenue</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:"#f9f9f9",paddingHorizontal:15, paddingVertical:12, flexDirection:"row", justifyContent:"space-between"}}>
                           <TouchableOpacity onPress={() => this.callAgent()}>
                                <Text><Icon name='phone-square' type="FontAwesome" style={{fontSize:19, color:"green"}}/>  Call</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.senMessage()}>
                                <Text><Icon name='message' type="Entypo"  style={{fontSize:19, color:"blue"}}/> Send Message</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.agentWrapper}>
                        <View style={{paddingVertical:10,paddingHorizontal:15, flexDirection:"row", justifyContent:"space-between"}}>
                            <View>
                                <Text style={styles.city}>Kampala</Text>
                                <Text>Festos Kampire </Text>
                            </View>
                            <View>
                                <Text style={styles.town}>MUBs Small Gate</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:"#f9f9f9",paddingHorizontal:15, paddingVertical:12, flexDirection:"row", justifyContent:"space-between"}}>
                            <TouchableOpacity onPress={() => this.callAgent()}>
                                <Text><Icon name='phone-square' type="FontAwesome" style={{fontSize:19, color:"green"}}/>  Call</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.senMessage()}>
                                <Text><Icon name='message' type="Entypo"  style={{fontSize:19, color:"blue"}}/> Send Message</Text>
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
        agentWrapper:{
            backgroundColor:"#fff",
            marginHorizontal:"4%",
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
        city:{
            textTransform:"uppercase",
            color:"#666"
        },
        town:{
            color:"#666",
            fontSize:14
        }
    }
    )