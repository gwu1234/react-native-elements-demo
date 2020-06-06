import React, { useState } from 'react';
import { View, Dimensions, } from 'react-native';
import { Button, Text, Badge, CheckBox} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
const  screenHeight = Dimensions.get('window').height; 

const Hooks = () => {  
    const [state, setState] = useState ({ 
               checked_1: false, 
               checked_2: false, 
               checked_3: false,
               checked_4: false
        });

    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                  <Text h1 style ={{color: "white"}} >React Hooks Playground</Text>
                  <Text h3 style ={{color: "white"}} >these checkboxes are implemented with Hooks</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    title='check box 1'
                    checked={state.checked_1}
                    onPress = {()=>setState ({
                       ...state, checked_1: !state.checked_1
                    })}
                  />
                  <CheckBox
                    center
                    title='check box 2'
                    checked={state.checked_2}
                    onPress = {()=>setState ({
                       ...state, checked_2: !state.checked_2
                    })}
                  />
                  <CheckBox
                    center
                    title='check box 3'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={state.checked_3}
                    onPress = {()=>setState ({
                       ...state, checked_3: !state.checked_3
                    })}
                  />
                  <CheckBox
                    center
                    title='Click Here to Remove This Item'
                    iconRight
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={state.checked_4}
                    onPress = {()=>setState ({
                       ...state, checked_4: !state.checked_4
                    })}
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
                      title="Badges"
                      onPress = {()=>Actions.badges()}/>   
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
                      title="Checkboxes"
                      onPress = {()=>Actions.checkboxes()}/>                     
             </View>  
          </View>   
        );
  }

const styles = {
  container: {
    flex: 1 ,     
  }, 
  header : {
    position: 'absolute',
    top: 0,
    width: "100%",
    height: screenHeight*0.2,
    backgroundColor: '#EE5407',
    alignItems: "center",
  },
  checkboxContainer: {
    marginTop : screenHeight*0.2,
    height: screenHeight*0.7,
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

export default Hooks
