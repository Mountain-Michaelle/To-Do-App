import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView, Platform,
  SafeAreaView, StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import ToDoList from '../components/toDoList';
export default function HomeScreen() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
     if(!input.trim()) return
     setTodos((prev) => [
      ...prev,
      {id:Date.now().toString(), text:input, done:false},
     ]);
     setInput(""); 
     Keyboard.dismiss();
  }

  const toggleToDo = (id) => {

      setTodos((prev) => 
        prev.map((todo) => todo?.id === id ? {...todo, done: !todo?.done}: todo
      )
    )
    }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const toggleTodo = (id) => {
    setTodos((prev) => 
      prev.map((todo) => todo.id === id ? {...todo, done: !todo.done } : todo)
    )
  }
  return (
    <SafeAreaView 
     style={style.container}>
      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1}}
       >
      <View style={style.topText}>
        <Text style={{color:'white', fontSize: 20, textDecorationStyle:'uppercase'}}>To Do</Text>
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
        value={input}
        onChangeText={setInput}
        style={style.txtIpt}
        
        />
        </View>
          <TouchableOpacity onPress={addTodo} style={style.bttn}>
            <Text>ADD</Text>
          </TouchableOpacity>
      </View>
      
      <View style={{display:'flex', width:'100%', justifyContent:'center', marginTop:20}}>
        <View style={{ minWidth:'90%', height:1, backgroundColor:'white'}}>
        </View>
        <ToDoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
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
    color:'#fff',
    fontSize: 20,
    marginTop: 100,
    textAlign: 'center',
    alignItems: 'center',
    textTransform:'uppercase',

  },

  icon:{
    backgroundColor:'purple',
    width:50,
    height:50,
    padding:12,
    marginTop: 5,
    borderRadius:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
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
      padding:15, backgroundColor:'skyblue',
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