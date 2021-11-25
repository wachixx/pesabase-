import React from 'react';
import {StyleSheet,StatusBar,View,TouchableOpacity,Image} from 'react-native';
import {Icon, Container, Header, Content,Body,Left,Text,Drawer, Right,StyleProvider,Footer, Button,FooterTab, Spinner} from 'native-base';
import UserAvatar from 'react-native-user-avatar';
import Flag from 'react-native-flags';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

import { Modalize } from 'react-native-modalize';

import HomeScreen from './HomeScreen';
import ActivityScreen from './ActivityScreen';
import ProfileScreen from './ProfileScreen';

export default class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {index: 0, user:null, isLoading:false}

        this.modalizeRef  = React.createRef();
    }

    switchScreen(index) {
        this.setState({index: index})
    }

    onOpen = () => {
        this.modalizeRef.current?.open();
    };

    render() {
        const { navigate } = this.props.navigation;

        let AppComponent = null;

        if (this.state.index == 0) {
            AppComponent = HomeScreen
        }else if(this.state.index == 1){
            AppComponent = ActivityScreen
        }else if(this.state.index == 3){
            AppComponent = ProfileScreen
        }

        return (
        <StyleProvider style={getTheme(material)}>  
            <Container style = {styles.cont}>
                
            {this.state.index != 3?
            <Header style={styles.header} androidStatusBarColor="#fb8c00" androidBarStyle="light-content">
                <Left style={{position:"relative"}}> 
                   <UserAvatar size={38} name="Avishay Bar" src="https://dummyimage.com/100x100/000/fff" />
                   <View style={{position:"absolute", left:26, bottom:-1}}>
                      <Flag code="KE" size={16}/>
                   </View>
                </Left>
                 <Body>
                 </Body>
                 <Right>
                    <Icon type="SimpleLineIcons" style={{fontSize:20, marginRight:20, marginBottom:2}} name="bell"/>
                    <Icon type="AntDesign" name="qrcode"/>
                </Right>
            </Header> 
            :null}

            <AppComponent navigation= {this.props.navigation} {...this.props}/>

            <Modalize 
                    ref={this.modalizeRef}
                    adjustToContentHeight={true}
                   scrollViewProps={{ keyboardShouldPersistTaps: 'handled' }}>
                       {
                           (this.state.isLoading)?
                              <Spinner color={COLOR_PRIMARY} size={50} style={{marginVertical:15}}/>
                           :
                           <View>
                                <TouchableOpacity onPress={() => {navigate('FindAgentScreen');}}  underlayColor={'transparent'}>
                                <View style={[styles.menu,{marginTop:20}]} >
                                    <Icon name="compass" style={styles.menuIcon} type="FontAwesome"/>
                                    <Text style={styles.menuText}>Find an agent</Text>
                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {navigate('ApplyAgentScreen');}} underlayColor={'transparent'}>
                                        <View style={styles.menu} >
                                        <Icon name="adduser" style={styles.menuIcon}  type="AntDesign"/>
                                            <Text style={styles.menuText}>Apply to be an agent</Text>
                                        </View>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={() => {navigate('AgentOrdersScreen');}} underlayColor={'transparent'}>
                                        <View style={styles.menu} >
                                            <Icon name="business-center" style={styles.menuIcon}  type="MaterialIcons"/>
                                            <Text style={styles.menuText}>View my orders (10)</Text>
                                        </View>
                                </TouchableOpacity>
                           </View>
                       }
                        
            </Modalize>
            <Footer>
               <FooterTab style={styles.footerWrapper}>
                    <Button vertical active onPress={() => this.switchScreen(0)}>
                        <Icon active type="FontAwesome"  name="home"   style = {this.state.index === 0 ? { color:"#fb8c00"} : {color : "#333"} }/>
                        <Text style={styles.menuText} active numberOfLines={1} uppercase={false}
                        style = {this.state.index === 0 ? { color:"#fb8c00"} : {color : "#333"} }
                        >Home</Text>
                    </Button>
                    <Button vertical  onPress={() => this.switchScreen(1)}>
                        <Icon type="MaterialCommunityIcons"  name="finance"  style = {this.state.index === 1 ? { color:"#fb8c00"} : {color : "#333"} }/>
                        <Text style={styles.menuText} numberOfLines={1} uppercase={false}
                        style = {this.state.index === 1 ? { color:"#fb8c00"} : {color : "#333"} }
                        >Activity</Text>
                    </Button>
                    <Button vertical  onPress={() => this.onOpen()}>
                        <Icon type="MaterialCommunityIcons"  name="account-group-outline"  style = {this.state.index === 2 ? { color:"#fb8c00"} : {color : "#333"} }/>
                        <Text style={styles.menuText} numberOfLines={1} uppercase={false}
                        style = {this.state.index === 2 ? { color:"#fb8c00"} : {color : "#333"} }
                        >Agents</Text>
                    </Button>
                    <Button  vertical onPress={() => this.switchScreen(3)}>
                        <Icon type="FontAwesome5"  name="user-cog"  style = {this.state.index === 3 ? { color:"#fb8c00"} : {color : "#333"} } />                        
                        <Text style={styles.menuText} numberOfLines={1} uppercase={false}
                        style = {this.state.index === 3 ? { color:"#fb8c00"} : {color : "#333", paddingHorizontal:0} }
                        >Me</Text>
                    </Button>
                </FooterTab>
            </Footer>
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
            backgroundColor:"#f1f1f1",
            elevation: 0
          },
          footerWrapper:{ 
              backgroundColor: "#FFF"
          },
          menu:{
              marginHorizontal:"5%",
              flexDirection:"row",
              marginTop:5,
              backgroundColor:"#f1f1f1",
              paddingVertical:15,
              paddingHorizontal:15
          },
          menuIcon:{
              fontSize:25,
              color:"#fb8c00", 
              marginRight:15
          },
          menuText:{
              padding:0
          }
     })