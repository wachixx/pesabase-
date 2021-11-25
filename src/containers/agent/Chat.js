import React from 'react';
import {
    StyleSheet,
    View,
    Image, Dimensions, TouchableHighlight,
    Linking, FlatList, Platform,CheckBox, ScrollView
} from 'react-native';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

import {
    Text, Icon,Spinner, Item, Input, Button, Footer, Textarea
} from 'native-base';
import moment from 'moment';

export default class Chat extends React.Component {
    
    constructor(props){
        super(props);
        this.state ={
             showForm : true,
             sendBtn : false,
             text:"",
            };
    }

    showSendBtn = () =>{
        this.setState({sendBtn: true});
    }

    render() {
        return (
            <View>
            <View style={styles.chatWrapper}>
                <View style={styles.chatsContainer}>
                
                    <View>
                       <View style={styles.chatContainerSelf}>
                        <View style={styles.chatHeader}>
                            <Text style={styles.chatUser}>You</Text>
                            <Text style={styles.chatTime}>3.45pm</Text>
                        </View>
                        <Text style={styles.chatText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam </Text>
                                        {/*<View style={styles.chatFooter}>
                                            <Text  style={styles.chatReplyNo}>Reply</Text>
                                            <Icon style={styles.chatIconReply} name="angle-right" type="FontAwesome"></Icon>
                                        </View>*/}
                        </View>
                        <View style={styles.chatContainer}>
                            <View style={styles.chatHeader}>
                                <Text style={styles.chatUser}>Client B</Text>
                            <Text style={styles.chatTime}>3.46pm</Text>
                        </View>
                            <Text style={styles.chatText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam </Text>
                                         {/*<View style={styles.chatFooter}>
                                            <Text  style={styles.chatReplyNo}>Reply</Text>
                                            <Icon style={styles.chatIconReply} name="angle-right" type="FontAwesome"></Icon>
                                        </View>*/}
                                    </View>
                               
                            </View>
                      
                    
                
                </View>
              
               
            </View>
              <View style={styles.chatInput}>
              <View style={styles.chatArea}>
                  <AutoGrowingTextInput onFocus={()=>this.showSendBtn()}  onChangeText={text => this.setState({text})} style={styles.textInput} placeholder={'Your Message'} />
                  </View>
                  {
                      (this.state.sendBtn)?
                      <Icon name="send-circle"  style={{position:"absolute",color:"#fb8c00", bottom:15,fontSize:50, right:15}} type="MaterialCommunityIcons" onPress={() => this.sendTxt()}/>
                      :
                      <Icon name="plussquare"  style={{position:"absolute",color:"#fb8c00", bottom:15,fontSize:50, right:15}} type="AntDesign"/>
                  }
          </View>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    chatWrapper:{
        width:"100%",
        height:"100%",
        backgroundColor:"#f1f1f1",
        position:"relative",
        paddingBottom:200
    },
    chatInput:{
       position:"absolute",
       bottom:0,
       borderTopColor:"#ddd",
       borderTopWidth:0.5,
       paddingVertical:15,
       width:"100%",
       backgroundColor:"#fff",
       flexDirection:"row",
       paddingHorizontal:15
    },
    chatsContainer:{
        padding:15
    },
    chatContainer:{
        width:"85%",
        backgroundColor:"#fff",
        borderWidth:0.5,
        borderColor:"#f1f1f1",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        marginBottom:15,
        padding:15
    },
    chatContainerSelf:{
        width:"85%",
        backgroundColor:"#fb8c00",
        borderWidth:0.5,
        borderColor:"#f1f1f1",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        alignSelf:"flex-end",
        marginBottom:15,
        padding:15
    },
    chatHeader:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    chatUser:{
        fontWeight:"bold"
    },
    chatTime:{
        fontSize:14,
    },
    chatText:{
        fontSize:14,
        marginTop:3,
        lineHeight:22
    },
    chatFooter:{
        borderTopColor:"#ccc",
        borderTopWidth:0.5,
        marginTop:10,
        paddingTop:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    chatReplyNo:{
        fontSize:14
    },
    chatIconReply:{
        fontSize:17
    },
    chatArea:{
        backgroundColor:"#f1f1f1",
        borderRadius:5,
        width:"80%",
        paddingHorizontal:10
    },
    discussion:{
        color:"#ccc",
        marginHorizontal:10,
        marginBottom:5,
        marginTop:15,
        fontSize:15
    }
})