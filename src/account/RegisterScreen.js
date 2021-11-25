import React from 'react';
import {StyleSheet, View, Text,StatusBar,Image,TouchableOpacity} from 'react-native';
import {Container,Header,Content,Body,Left,Right,Title,Input,Icon,StyleProvider,Spinner,Form, Item, Label } from 'native-base';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box';
import {NavigationActions,StackActions} from 'react-navigation';
import SelectDropdown from 'react-native-select-dropdown';

import {COLOR_PRIMARY} from "../utilities/Colors";

const genders = ["Male", "Female"]


export default class RegisterScreen extends React.Component {

constructor(props){
    super(props);
    this.state = {
        currentPosition:0,
        defaultCountry:"ke", 
        checked:false, 
        username:"",password:""}
}

onFinish = async() => {
    let navigateAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'PinScreen'})],
        key: null,
    });
    this.props.navigation.dispatch(navigateAction);
}


render() {

  const { navigate } = this.props.navigation;

    const buttonTextStyle = {
        color: '#393939',
        backgroundColor: COLOR_PRIMARY,
        paddingHorizontal:25,
        alignSelf:"flex-end",
        borderRadius:5,
        paddingVertical:7,
        marginTop:15,
        fontSize:17
    };

    const buttonPTextStyle = {
        color: '#ccc',
        fontSize:17
    };

    return (
      <StyleProvider style={getTheme(material)}>  
      <Container style = {styles.cont}> 
         <Content>
            <Header  style={styles.header} androidStatusBarColor="#fb8c00" androidBarStyle="light-content">
                <Left><Icon name='arrow-back' style={{color:"#000", padding:15}} onPress={() => this.props.navigation.goBack()}/></Left>
                <Right />
            </Header>
             <View style={{marginBottom:0}}>
                <Text style={styles.headerTxt}>Create Account</Text>
                <Text style={styles.headerTxtDesc}>Please fill in the form to create an account with Pesabase.</Text>  
             </View>
             <View style={styles.loginFormWrapper}>
                    <ProgressSteps activeLabelColor={COLOR_PRIMARY} completedProgressBarColor={COLOR_PRIMARY} activeLabelFontSize={13} labelFontSize={13} activeStepIconBorderColor={COLOR_PRIMARY} completedStepIconColor={COLOR_PRIMARY} >
                        <ProgressStep label="More Details" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonPTextStyle}>
                            <View style={styles.formWrapper}>
                                
                                <View  style={styles.textIn}>
                                        <Label style={styles.label}>Gender</Label>
                                        <SelectDropdown
                                            data={genders}
                                            onSelect={(selectedItem, index) => {
                                                setFromCurrency(selectedItem)
                                                setFromAmount(0)
                                                setToAmount(0)
                                            }}
                                            renderDropdownIcon={() => {
                                            return (
                                                <FontAwesome name="chevron-down" color={"#444"} size={18} />
                                            );
                                            }}
                                            />
                                </View>

                                <View  style={styles.textIn}>
                                        <Label style={styles.label}>Date of birth</Label>
                                        <Item regular style={styles.itemHeader} >
                                        <Input style={styles.input} keyboardType="email-address" autoCompleteType="email" onChangeText={email => this.setState({email})}
                                        value={this.state.email}/>

                                        </Item>
                                </View>

                                <View  style={styles.textIn}>
                                        <Label style={styles.label}>Suburb</Label>
                                        <Item regular style={styles.itemHeader} >
                                        <Input style={styles.input} keyboardType="email-address" autoCompleteType="email" onChangeText={email => this.setState({email})}
                                        value={this.state.email}/>

                                        </Item>
                                </View>

                                <View  style={styles.textIn}>
                                        <Label style={styles.label}>City</Label>
                                        <Item regular style={styles.itemHeader} >
                                        <Input style={styles.input} keyboardType="email-address" autoCompleteType="email" onChangeText={email => this.setState({email})}
                                        value={this.state.email}/>

                                        </Item>
                                </View>

                                <View  style={styles.textIn}>
                                        <Label style={styles.label}>Country</Label>
                                        <Item regular style={styles.itemHeader} >
                                        <Input style={styles.input} keyboardType="email-address" autoCompleteType="email" onChangeText={email => this.setState({email})}
                                        value={this.state.email}/>

                                        </Item>
                                </View>
                                
                                

                                <View style={{flexDirection:"row", marginTop:5, marginHorizontal:5}}>
                                   <CheckBox
                                    isChecked={this.state.checked ? true : false}
                                    style={{marginTop: 10, marginLeft:5}}
                                    checkBoxColor={COLOR_PRIMARY}
                                    onClick={()=>{
                                        this.setState({
                                            checked:!this.state.checked
                                        })
                                      }}
                                    />
                                   <Text style={styles.phoneTermsOuter}>By creating your account, you are accepting our <Text onPress={this.showUploadModal} style={styles.phoneTerms}> terms and conditions.</Text> and <Text onPress={this.showUploadModal} style={styles.phoneTerms}> privacy policy.</Text></Text>
                               </View>

                            </View>
                        </ProgressStep>
                        <ProgressStep label="Your Photo" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonPTextStyle}>
                            <View style={styles.formWrapper}>
                                <Text style={{textAlign:"center", fontSize:14}}>Please take a selfie</Text>
                                <View style={styles.profilePic}> 
                                </View>
                                <Icon  style={{fontSize:40, textAlign:"center"}} name="camera" type="FontAwesome"/>
                            </View>
                        </ProgressStep>
                        <ProgressStep label="Documents" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonPTextStyle} onSubmit={this.onFinish} >
                            <View style={styles.formWrapper}>
                                 <Text style={{marginBottom:2,fontSize:14, marginBottom:2}}>Click to upload the front of your national ID</Text>
                                 <View style={[styles.document,{marginBottom:25}]}>
                                </View>
                                <Text style={{marginBottom:2,fontSize:14, marginBottom:2}}>Click to upload the back of your national ID</Text>
                                <View style={styles.document}>
                                </View>
                            </View>
                        </ProgressStep>
                    </ProgressSteps>
             </View>
        </Content>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
    cont:{
        backgroundColor:"#f1f1f1"
    },
    header:{
        backgroundColor:"#f1f1f1",
        elevation: 0
    },
    headerTxt:{
        fontSize:20,
        marginHorizontal:"5%",
        marginTop:20
    },
    headerTxtDesc:{
        fontSize:15,
        marginHorizontal:"5%",
    },
    loginFormWrapper:{
        backgroundColor:"#f1f1f1",
        paddingHorizontal:"6%",
        paddingTop:30

    },
    formFields:{
        marginBottom:17,
        borderColor:"#000",
        borderRadius:7,
        borderWidth:0.5,
        paddingHorizontal:10
    },
    loginBtn:{
        backgroundColor:"#fb8c00",
        borderRadius:7,
        marginTop:25,
        alignItems:"center",
        padding:15
    },
    orView:{
        height:1,backgroundColor:"#000",marginHorizontal:"13%", marginTop:45,marginBottom:35, position:"relative"
    },
    orTxt:{
        backgroundColor:"#fff",width:40, textAlign:"center", left:"45%",top:-10, position:"absolute"
    },
    outhSignIn:{
        marginVertical:15,
        flexDirection:"row",
        width:95,
        justifyContent:"space-between",
        alignSelf:"center"
    },
    btnTxt:{
        fontSize:16,
        color:"#fff"
    },
    bottomTxt:{
        textAlign:"center",
        marginTop:10,
        marginBottom:20
    },
    containerStyle:{
        borderWidth: 2,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom:15
    },
    customLabelStyles:{
        color: 'red',
        fontSize: 12,
    },
    labelStyles:{
        backgroundColor: '#fff',
        paddingHorizontal: 5,
    },
    inputStyles:{
        color: 'blue',
        paddingHorizontal: 10,
    },
    formWrapper:{
        backgroundColor:"#fff",
        padding:15,
        borderRadius:10,
        marginBottom:25
    },
    textIn:{
        marginHorizontal: "5%",
        marginBottom:5,
        marginTop:15
    },
    label:{
        marginBottom:5, fontSize:15
    },
    itemHeader:{
       borderColor:"#ddd",borderRadius:5
    },
    input:{
       borderRadius:5,
       color:"#000"
    },
    phoneTermsOuter:{
        fontSize:14,
        marginTop:10,
        marginBottom:10,
        textAlign:"center",
        lineHeight:24,
        color:"#000"
    },
    phoneTerms:{
        color:COLOR_PRIMARY
    },
    profilePic:{
        width:250,
        height:250,
        backgroundColor:"#ddd",
        alignSelf:"center",
        marginVertical:20,
        borderRadius:5
    },
    document:{
        width:"100%",
        height:250,
        backgroundColor:"#ddd",
        borderRadius:5
    }
 });
