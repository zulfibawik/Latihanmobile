import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Register, Splash, UploadPhoto } from "../pages";
import GetStarted from "../pages/GetStarted";


const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="GetStarted">
            <Stack.Screen name="Splash" component={Splash} 
            options={{headerShown: false}}
             />
            <Stack.Screen 
            name="GetStarted" 
            component={GetStarted}
            options={{headerShown: false}} />

       <Stack.Screen 
            name="Register" 
            component={Register}
            options={{headerShown: false}} />
               <Stack.Screen 
            name="Login" 
            component={Login}
            options={{headerShown: false}} />

<Stack.Screen 
            name="UploadPhoto" 
            component={UploadPhoto}
            options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router