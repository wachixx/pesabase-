import React from 'react';
import {StyleSheet,Dimensions,Image,View,TouchableOpacity,Alert,Linking} from 'react-native';
import {Icon, Container, Header, Content,Body,Left,Text,Item, Right,StyleProvider,Footer, Button,Input} from 'native-base';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import UserAvatar from 'react-native-user-avatar';

export default class ProfileScreen extends React.Component {
    
    render() {

        const { navigate } = this.props.navigation;

        return (
            <StyleProvider style={getTheme(material)}>  
                <Container style = {styles.cont}> 
                    <Content>
                        <View style={{flexDirection:"row", marginHorizontal:"4%",justifyContent:"space-between", marginTop:30}}>
                            <View style={{marginTop:15}}>
                                <Text style={{fontWeight:"bold", fontSize:22}}>Taylor Wanjohi</Text>
                                <Text style={{fontSize:13}}>View and Edit Profile</Text>
                            </View>
                            <View style={{width:70}}>
                                 <UserAvatar size={70} name="Evans Wanyama" src="https://dummyimage.com/100x100/000/fff" />
                            </View>
                        </View>

                        <View style={{backgroundColor:"#fff", borderRadius:5,marginVertical:35, marginHorizontal:"4%"}}>
                            <View style={styles.menuItem}>
                                <Text>Change Pin</Text>
                                <Icon name="onepassword" type="MaterialCommunityIcons" size={20}/>
                            </View>
                            <View style={styles.menuItem}>
                                <Text>Change Currency</Text>
                                <Icon name="currency-sign" type="MaterialCommunityIcons" size={20}/>
                            </View>
                            <View style={styles.menuItem}>
                                <Text>Raise a ticket</Text>
                                <Icon name="ticket-account" type="MaterialCommunityIcons" size={20}/>
                            </View>
                            <View style={styles.menuItem}>
                                <Text>Call support</Text>
                                <Icon name="file-phone" type="MaterialCommunityIcons" size={20}/>
                            </View>
                            <View style={styles.menuItem}>
                                <Text>Pesabase website</Text>
                                <Icon name="web" type="MaterialCommunityIcons" size={20}/>
                            </View>
                            <View style={styles.menuItem}>
                                <Text>Rate us on Google Play</Text>
                                <Icon name="star-rate" type="MaterialIcons" size={20}/>
                            </View>
                            <View style={styles.menuItem}>
                                <Text>Terms and Conditions</Text>
                                <Icon name="book-outline" type="MaterialCommunityIcons" size={20}/>
                            </View>
                            <View style={styles.menuItem}>
                                <Text>Privacy Policy</Text>
                                <Icon name="privacy-tip" type="MaterialIcons" size={20}/>
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
    menuItem:{
        padding:20, borderBottomWidth:1.5,
        borderBottomColor:"#f1f1f1",
        flexDirection:"row",
        justifyContent:"space-between"
    }
})