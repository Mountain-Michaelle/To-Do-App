import { Image } from 'expo-image';
import { Button, KeyboardAvoidingView, Platform, TouchableOpacity,
   SafeAreaView, StyleSheet, TextInput, View, 
   Text} from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView 
     style={style.container}>
      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1}}
       >
      <View style={style.topText}>
        To Do
        <MaterialIcons name="book" style={style.icon} size={24} color="white" />
      </View>

      <View 
      style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
        <View
        style={style.topInput}
        >
        <TextInput 
        placeholder='Write your to do...'
        multiline 
        value=""
        style={style.txtIpt}
        
        />
        </View>
          <TouchableOpacity style={style.bttn}>
            <Text>ADD</Text>
          </TouchableOpacity>
      </View>
      
      <View style={{display:'flex', width:'100%', justifyContent:'center', marginTop:40 }}>
        <View style={{ minWidth:'90%', height:1, backgroundColor:'white'}}>

        </View>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor:'black',
    flex:1,
    width: '100%',
  },
  topText:{
    display:'flex',
    color:'white',
    marginTop: 50,
    textAlign: 'center',
    textTransform:'uppercase',

  },

  icon:{
    backgroundColor:'purple',
    width:50,
    height:50,
    padding:6,
    margin:'auto',
    borderRadius:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:4
  },

  topInput:{
    display:'flex',
    backgroundColor:'skyblue',
    minWidth:'80%',
    borderRadius:20,
    marginTop:50,
     },

     txtIpt:{
      outline:'none',
      borderWidth:0, borderRadius:10,
      padding:6, backgroundColor:'skyblue',
      fontSize:15,
     },

     bttn:{
      backgroundColor:'white',
      padding:10, margin:5, 
      paddingRight:20,
      paddingLeft:20,
      fontSize:15,
      marginTop: 20,
      }
})