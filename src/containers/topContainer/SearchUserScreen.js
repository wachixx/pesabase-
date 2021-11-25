import React from 'react';
import {StyleSheet, View, Text,FlatList,StatusBar,Platform, TextInput,TouchableHighlight,ActivityIndicator, TouchableOpacity,ImageBackground,Image, Dimensions,NetInfo,PermissionsAndroid} from 'react-native';
import {
  Container,StyleProvider,Button, Icon,Footer,FooterTab,Badge,Content,Header,List,ListItem,Item,Input, Left, Body, Right,Drawer} from 'native-base';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {NavigationActions,StackActions} from 'react-navigation';
import UserAvatar from 'react-native-user-avatar';
import Contacts from 'react-native-contacts';
import renderIf from 'render-if';

export default class SearchUserScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {isLoadingContacts:true, phoneNumber: '',phoneContacts:[]}
    }

    loadContactProfile = (phoneNumber, fname, oname) =>{
        const navigateAction = NavigationActions.navigate({
            routeName: 'ContactProfile',
            params: {phoneNumber:  phoneNumber, name: fname+" "+oname}
        })
        this.props.navigation.dispatch(navigateAction)        
    }
    
    getContacts = () => {
        Contacts.getAll((err, contacts) => {
          if (err === "denied") {
            console.warn("Permission to access contacts was denied");
          } else {
            this.setState({phoneContacts: contacts});
            this.setState({isLoadingContacts: false});
          }
        });
        Contacts.getCount(count => {
          //this.setState({ searchPlaceholder: `Search ${count} contacts` });
        });
     }

    render() {

        const { navigate } = this.props.navigation;
      
          return (
            <StyleProvider style={getTheme(material)}>
            <Container style = {styles.cont}>
                <Header style={styles.header}  androidStatusBarColor="#d47600" androidBarStyle="light-content" hasTabs>
                <Left>
                    <Icon name='arrow-left' type="Feather" style={{color:"#FFF", paddingHorizontal:15}} onPress={() => this.props.navigation.goBack()}/>
                </Left>

                <Body><Text style={styles.title}>Search Pesabase User</Text></Body>
                
                <Right>
                </Right>          
                </Header>
                <Content style={styles.contentWrapper}>
                    <View style={styles.searchWrapper}>
                      <Item regular>
                          <Input style={{height:40, fontSize:17, paddingLeft:15, fontWeight:"bold"}} placeholder='Search Pesabase' />
                          <Icon style={{fontSize:23, color:"#888888", marginRight:10}} name='search' />
                      </Item>
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
    header: {
        backgroundColor: "#fb8c00",
    }, 
    title:{
        fontWeight:"bold",
        color:"#FFF"
    },
    textName:{
        color:"#000",
        fontSize:17,
        fontWeight:"bold",
        textTransform:"capitalize"
    },
    searchWrapper:{
        backgroundColor:"#fff",
        marginHorizontal:"3%",
        marginVertical:"3%",
        padding:8
    },
    contactsWrapper:{
        backgroundColor:"#fff",
        marginHorizontal:"3%",
        marginBottom:"3%",
        paddingRight:20
    }
})