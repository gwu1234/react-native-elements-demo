import React, { Component } from 'react';
import { View, Dimensions, } from 'react-native';
import { Button, Text, List, ListItem, FlatList} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
const  screenHeight = Dimensions.get('window').height; 

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
]

class Lists extends Component {
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
                  <Text h1 style ={{color: "white"}} >List Demo Room</Text>
            </View>
            <View style={styles.listContainer}>                  
                {list.map((l, index) => (
                    <ListItem
                        containerStyle={{width:400, height: 120}}
                        key ={index}
                        roundAvatar                       
                        leftAvatar={{ source: { uri: l.avatar_url }, size: 100}}
                        rightIcon={{name: 'arrow-long-right', size: 15, type: 'entypo', color: "black"}}
                        title={l.name}
                        titleStyle={{fontWeight:"bold", fontSize:20, marginLeft:20, marginRight: 40}}
                        subtitle={l.subtitle}
                        subtitleStyle={{fontWeight:"normal", fontSize:15, marginLeft:20, marginRight: 40}}
                        bottomDivider
                      />
                 ))}                      
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
                      title="Forms" 
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
  listContainer: {
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

export default Lists
