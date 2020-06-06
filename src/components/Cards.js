import React, { Component } from 'react';
import { View, Dimensions, } from 'react-native';
import { Button, Icon, Text, CheckBox, Card, ListItem, Image} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
const  screenWidth = Dimensions.get('window').width; 
const  screenHeight = Dimensions.get('window').height; 
const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
     greeting: "how are you ?"
  },
  {
    name: 'guoping',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    greeting: "have good day !"
 }
 ]

class Cards extends Component {
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
                  <Text h1 style ={{color: "white"}} >Card Show Room</Text>
            </View>
            <View style={styles.cardContainer}>
                 <Card title="CARD WITH DIVIDER">
                  {
                    users.map((u, i) => {
                      console.log(u);
                      return (
                        <View key={i} style={styles.user}>
                          <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: u.avatar }}
                          />
                          <Text style={styles.name}>{u.name}</Text>
                          <Text style={styles.name}>{u.greeting}</Text>
                          
                        </View>
                      );
                    })
                  }
                </Card>
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
                      title="Badges"
                      onPress = {()=>Actions.badges()}/>   
                    <Button 
                      raised
                      type="outline"
                      icon={{ name: "input", size: 20, color: "black"}} 
                      iconRight title="CheckBoxes"  
                      onPress = {()=>Actions.checkboxes()}/>   
                    <Button 
                      raised
                      type="outline"
                      icon={{ name: "input", size: 20, color: "black"}} 
                      iconRight title="Lists"  
                      onPress = {()=>Actions.lists()}/>   
                    <Button 
                      raised
                      type="outline"
                      icon={{ name: "input", size: 20, color: "black"}} 
                      iconRight title="Forms"  
                      onPress = {()=>Actions.forms()}/>   
                    <Button 
                      raised
                      type="outline"
                      icon={{ name: "input", size: 20, color: "black"}} 
                      iconRight title="Hooks"  
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
  cardContainer: {
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
  user: {
    width: 150,
    height: 150, 
  },
  image: {
    width: 100,
    height: 100, 
  },
  name:{
    fontWeight:"bold",
    color: "black"
  }
};

export default Cards
