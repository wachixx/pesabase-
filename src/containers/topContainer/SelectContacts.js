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

export default class ContactScreen extends React.Component {

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

    componentDidMount() {
        if (Platform.OS === "android") {
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
              title: "Contacts",
              message: "This app would like to view your contacts."
            }).then(() => {
              this.loadContacts();
            });
          } else {
            this.loadContacts();
          }
    }

    loadContacts() {
        Contacts.getAll()
          .then(contacts => {
            this.setState({ phoneContacts:contacts});
            this.setState({isLoadingContacts: false});
            console.log("-------" + JSON.stringify(contacts))
          })
          .catch(e => {
            this.setState({ isLoadingContacts: false });
          });
    
        Contacts.checkPermission();
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

                <Body><Text style={styles.title}>Contacts</Text></Body>
                
                <Right>
                </Right>          
                </Header>
                <Content style={styles.contentWrapper}>
                    <View style={styles.searchWrapper}>
                      <Item regular>
                          <Input style={{height:40, fontSize:17, paddingLeft:15, fontWeight:"bold"}} placeholder='Search Contacts' />
                          <Icon style={{fontSize:23, color:"#888888", marginRight:10}} name='search' />
                      </Item>
                    </View>
                    {renderIf(!this.state.isLoadingContacts)(
                    <View style={styles.contactsWrapper}>
                        <List>
                            <FlatList
                                extraData={this.state}
                                keyExtractor={(item, index) => item.id}
                                data={this.state.phoneContacts}               
                                renderItem={({item}) => 
                                    <ListItem style={{marginVertical:3}} avatar onPress={() => this.loadContactProfile(item.phoneNumbers[0]?item.phoneNumbers[0].number:"No Number",item.givenName?item.givenName:"", item.familyName?item.familyName:"")}>
                                        <Left>
                                            <UserAvatar size="45" name= {item.givenName?item.givenName:"No Name"} />
                                        </Left>
                                        <Body style={{position:"relative"}}>
                                            <Text style={styles.textName}>{item.givenName?item.givenName:"No Name"} {item.familyName?item.familyName:""}</Text>
                                            <Text note style={{fontSize:13,marginTop:2,marginBottom:5}}>{item.phoneNumbers[0]?item.phoneNumbers[0].number:"No Number"}</Text>
                                        </Body>
                                        <View style={{position:"absolute",top:25, right:5}}>
                                            <Icon type="FontAwesome" style={{color:"#ccc", fontSize:16}} name="angle-right"/>
                                        </View>
                                    </ListItem>
                                }/> 
                        </List>
                    </View>
                    )}
                    {renderIf(this.state.isLoadingContacts)(  
                        <View style={{alignItems:"center"}}>
                           <ActivityIndicator size="large" style={{padding:10,flex:1,justifyContent:"center"}}/>
                        </View>
                    )}
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