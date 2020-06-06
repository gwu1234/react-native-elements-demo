import React, { Component } from 'react';
import { View, Dimensions, } from 'react-native';
import { Button, Text, Input, Icon, Divider, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
const  screenHeight = Dimensions.get('window').height; 



class Forms extends Component {
  constructor() {
      super();
      this.state = {
         comment: "",
         inputValue: ""
      }  
  }

  

  buttonPressed =() => {
     console.log("pressed");
  }

  render() {    
      return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                  <Text h1 style ={{color: "white"}} >Form Demo Room</Text>
            </View>
            <View style={styles.formContainer}>                  
                <Input placeholder='basic input'
                    onChangeText={value => {
                         console.log ("input value = " + value);
                         this.setState({ inputValue: value })
                      }
                    }
                    containerStyle = {{height: 50, width: 400, backgroundColor: "blue"}}
                    inputStyle = {{color: "white", fontWeight: "bold"}}
                    placeholderTextColor = {"white"}
                />
                <Divider style={{ width: "100%", height: 10, backgroundColor: '#f7f3f2'}} />

                <Input
                    placeholder='input with chevron-left'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                    containerStyle = {{height: 50, width: 600, backgroundColor: "green"}}
                    inputStyle = {{color: "white", fontWeight: "bold"}}
                    placeholderTextColor = {"white"}
                  />
                 <Divider style={{ width: "100%", height: 10, backgroundColor: '#f7f3f2'}} />

                <Input
                    placeholder='Input with menu icon'
                    leftIcon={
                      <Icon
                        name='menu'
                        size={24}
                        color='black'
                      />
                    }
                    containerStyle = {{height: 50, width: 700, backgroundColor: "white"}}
                    inputStyle = {{color: "black", fontWeight: "bold"}}
                    placeholderTextColor = {"black"}
                 />
                 <Divider style={{ width: "100%", height: 10, backgroundColor: '#f7f3f2'}} />

                 <Input
                    placeholder="comment"
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    style={styles}
                    onChangeText={value => this.setState({ comment: value })}
                    containerStyle = {{height: 60, width: 800, backgroundColor: "lightblue"}}
                    inputStyle = {{color: "black", fontWeight: "bold"}}
                    placeholderTextColor = {"black"}
                    />
                   <Divider style={{ width: "100%", height: 10, backgroundColor: '#f7f3f2'}} />

                 <Input
                    placeholder='input with error message'
                    errorStyle={{ color: 'red' }}
                    errorMessage='enter an error here'
                    containerStyle = {{height: 60, width: 900, backgroundColor: "lightgreen"}}
                    inputStyle = {{color: "black", fontWeight: "bold"}}
                    placeholderTextColor = {"black"}
                  />
                   <Divider style={{ width: "100%", height: 10, backgroundColor: '#f7f3f2'}} />

                 <Input placeholder="password" secureTextEntry={true} 
                    containerStyle = {{height: 60, width: 700, backgroundColor: "lightgrey"}}
                    inputStyle = {{color: "black", fontWeight: "bold"}}
                    placeholderTextColor = {"black"}
                 />
                 <Divider style={{ width: "100%", height: 10, backgroundColor: '#f7f3f2'}} />

            </View>
            <View style={styles.footer}>
                    <Button 
                      raised
                      type="outline"
                      icon={{ name: "book", size: 20, color: "black"}} 
                      iconRight 
                      title="Buttons"
                      onPress = {()=>Actions.buttons()}/>
                    <Button 
                      raised
                      type="outline"
                      icon={{ name: "book", size: 20, color: "black"}} 
                      iconRight 
                      title="Cards"
                      onPress = {()=>Actions.cards()}/>
                    <Button 
                      raised
                      type="outline"
                      icon={{ name: "input", size: 20, color: "black"}} 
                      iconRight 
                      title="Badges" 
                      onPress = {()=>Actions.badges()}/>    
                    <Button 
                      raised
                      type="outline"
                      icon={{ name: "input", size: 20, color: "black"}} 
                      iconRight 
                      title="CheckBoxes" 
                      onPress = {()=>Actions.checkboxes()}/>    
                    <Button 
                      raised
                      type="outline"
                      icon={{ name: "input", size: 20, color: "black"}} 
                      iconRight 
                      title="Lists" 
                      onPress = {()=>Actions.lists()}/>      
                    <Button 
                      raised
                      type="outline"
                      icon={{ name: "input", size: 20, color: "black"}} 
                      iconRight 
                      title="Hooks" 
                      onPress = {()=>Actions.hooks()}/>                      
             </View>  
          </View>   
        );
      }
  }

const styles = {
  container: {
    flex: 1 ,     
  }, 
  header : {
    position: 'absolute',
    top: 0,
    width: "100%",
    height: screenHeight*0.1,
    backgroundColor: '#EE5407',
    alignItems: "center",
  },
  formContainer: {
    marginTop : screenHeight*0.1,
    height: screenHeight*0.8,
    flexDirection: "column", 
    justifyContent: "space-around", 
    alignItems: "center", 
    overflow: "scroll"  
  },
  footer : {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    height: screenHeight*0.1,
    backgroundColor: 'green',
    flexDirection: "row", 
    justifyContent: "space-around", 
  }
};

export default Forms
