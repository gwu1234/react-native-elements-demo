import React, { Component } from 'react';
import { View, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Icon, Text } from 'react-native-elements';
//const  screenWidth = Dimensions.get('window').width; 
const  screenHeight = Dimensions.get('window').height; 

class Buttons extends Component {
  constructor() {
      super();
  }

  buttonPressed =() => {
     console.log("pressed");
  }

  render() {    
      return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                  <Text h1 style ={{color: "white"}} >Button Show Room</Text>
            </View>
            <View style={styles.buttonContainer}>
                  <View style={styles.left}>
                    <Button
                      title='solid' />
                    <Button
                      type="outline"
                      title='outline' />
                    <Button
                      type="clear"
                      title='clear button' />

                    <Button
                      icon={
                        <Icon
                          name="code"
                          size={20}
                          type = 'font-awesome'
                          color="white"
                        />
                      }
                      title="button with icon component"
                    />  

                    <Button
                      icon={{
                        name: "arrow-circle-right",
                        size: 15,
                        color: "white",
                        type: 'font-awesome'
                      }}
                      title="Button with icon object"
                    />

                    <Button
                      raised
                      type="outline"
                      icon={{name: 'arrow-long-right', size: 15, type: 'entypo', color: "black"}}
                      title='raised and outline' />             
                </View>
                <View style={styles.middle} />
                <View style={styles.right}>
                    <Button
                      large
                      icon={{name: 'code', size: 15, type: 'entypo', color: "black"}}
                      iconRight
                      title='right icon' />
                    <Button
                      large
                      icon={{name: 'arrow-long-left', size: 15, type: 'entypo', color: "black"}}
                      title='large button' />

                    <Button
                      large
                      type="solid"
                      icon={{name: 'arrow-right', size: 15, type: 'entypo', color: "black"}}
                      title='octicon' />

                    <Button icon={{ name: "mail", size: 15, type: 'entypo', color: "black"}} 
                      iconRight title="Mail"/>
                    
                    <Button 
                      raised
                      type="outline"
                      icon={{ name: "folder", size: 20, type: 'entypo', color: "black"}} 
                      iconRight title="folder"/>

                    <Button
                      onPress={this.buttonPressed}
                      titleStyle={{
                          color: "white",
                          fontSize: 16,
                      }}
                      buttonStyle={{
                          backgroundColor: "blue",
                          borderRadius: 30,
                          flex: 1,
                          height: 30,
                          width: 100,  
                      }}
                      title="Size"
                    />
                </View>
            </View>
            <View style={styles.footer}>
                    <Button 
                      raised
                      type="outline"
                      icon={{ name: "menu", size: 20, type: 'entypo', color: "black"}} 
                      iconRight title="Cards"
                      onPress = {()=>Actions.cards()}/>
                    <Button 
                      raised
                      type="outline"
                      icon={{ name: "menu", size: 20, type: 'entypo', color: "black"}} 
                      iconRight title="Badges"
                      onPress = {()=>Actions.badges()}/>
                    <Button 
                      raised
                      type="outline"
                      icon={{ name: "menu", size: 20, type: 'entypo', color: "black"}} 
                      iconRight title="CheckBoxes"
                      onPress = {()=>Actions.checkboxes()}/>   
                    <Button 
                      raised
                      type="outline"
                      icon={{ name: "menu", size: 20, type: 'entypo', color: "black"}} 
                      iconRight title="Lists"
                      onPress = {()=>Actions.lists()}/>    
                    <Button 
                      raised
                      type="outline"
                      icon={{ name: "menu", size: 20, type: 'entypo', color: "black"}} 
                      iconRight title="Forms"
                      onPress = {()=>Actions.forms()}/>                          
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
  buttonContainer: {
    marginTop : screenHeight*0.1,
    height: screenHeight*0.8,
    flexDirection: "row",      
  },
  footer : {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    height: screenHeight*0.1,
    backgroundColor: 'green',
    flexDirection: "row", 
    justifyContent: "space-around", 
  },
  left: {
    flex: 4,
    alignItems: "flex-end",
    justifyContent: "space-around",
    flexDirection: "column",  
  },
  middle: {
    flex: 1 ,
  },
  right: {
    flex: 4,
    alignItems: "flex-start",
    alignContent: "space-around",
    justifyContent: "space-around",
    flexDirection: "column",  
  }
};

export default Buttons
