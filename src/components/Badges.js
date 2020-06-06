import React, { Component } from 'react';
import { View, Dimensions, } from 'react-native';
import { Button, Text, Badge} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
const  screenHeight = Dimensions.get('window').height; 

class Badges extends Component {
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
                  <Text h1 style ={{color: "white"}} >Badges Show Room</Text>
            </View>
            <View style={styles.badgeContainer}>
                <Badge containerStyle={{ backgroundColor: 'blue', width: 400, height: 100}} 
                       value={<Text h2 style={{color:"white"}}>Guoping's Badge</Text>} />

                <Badge
                    containerStyle={{ backgroundColor: 'green', width: 200, height: 50}}
                    value={3}
                    textStyle={{ color: 'white', fontWeight:"bold", fontSize: 30 }}
                />
                <Badge containerStyle={{ backgroundColor: 'orange', width: 200, height: 50}}
                    value={<Text h2 style={{color: "black"}}> Alaine </Text>} />

                <Badge onPress={() => {console.log('pressed')}} value="5" />
                <Badge
                    value={3}
                    textStyle={{ color: 'red', size: 30 }}
                />            
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
                      title="Forms" 
                      onPress = {()=>Actions.forms()}/>   
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
  badgeContainer: {
    marginTop : screenHeight*0.1,
    height: screenHeight*0.8,
    flexDirection: "column", 
    justifyContent: "space-around", 
    alignItems: "center",   
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

export default Badges
