
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScree';
import DoctorListScreen from './screens/DoctorListScreen';
import AppointmentScreen from './screens/AppointmentScreen';
import { Image ,View,Text,Button} from 'react-native';

const Stack = createStackNavigator();
function Imaging(){
  return(
    <Image    
       source={require("./assets/home.jpg")}
       style={{width:27,height:27}} 
        
    />
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}  options={{
          headerTitle: (props) => <Imaging {...props} /> ,
          headerRight: () => (
            <View style={{ marginRight: 310 }}>
              <Text style={{ color: '#fff',fontWeight:"bold",fontSize:14 }}>Home</Text>
            </View>
          ),
           headerStyle:{
            backgroundColor:"darkgreen"
           },
           headerTintColor:"#fff",
           headerTitleStyle:{
            fontWeight:"bold"
           }
           }}/>
        <Stack.Screen name="DoctorList" component={DoctorListScreen} />
        <Stack.Screen name="Appointment" component={AppointmentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
