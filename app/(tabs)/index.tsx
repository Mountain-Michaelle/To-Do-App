import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import {
  Alert,
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
  const [toggle, setToggle] = useState(false)
  const [prevLength, setPrevLength] = useState(0)

   useEffect(() => {
        if(prevLength < 1&& todos.length === 10){
            Alert.alert("You now have 10 todos")
        }
        setPrevLength(todos.length);
    },[])

  const addTodo = () => {
     if(!input.trim()) return
     setTodos((prev) => [
      ...prev,
      {id:Date.now().toString(), text:input, done:false},
     ]);
     setInput(""); 
     Keyboard.dismiss();
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const clearAll = () => {
    setTodos([])
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
{/* 
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
          maxLength={200}
          />
          </View>
            <TouchableOpacity onPress={addTodo} onPressIn={addTodo} style={style.bttn}>
              <Text>ADD</Text>
            </TouchableOpacity>
        </View> */}
        
        <View style={style.topAlign}>
          <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <View style={{backgroundColor:'skyblue', display:'flex', alignItems:'center', padding:10,
            width:40, height:40, borderRadius:'100%'}}>
            <Text style={{fontWeight:"800", fontSize:15, color:'purple'}}>{todos.length}</Text>
          </View>
          <Text style={{color:'white', fontSize:20}}>  - Todo items</Text> 
          </View>
          
          
          <TouchableOpacity 
                      onPress={clearAll}    
                      >
                    <Text style={{color:'red/20', backgroundColor:'skyblue', padding:10, borderRadius:20, fontWeight:'400',
                      paddingLeft:20, paddingRight:20}}>
                        CLEAR ALL
                    </Text>
          </TouchableOpacity>
        </View>

          <View style={{ minWidth:'100%', marginTop:10, top:1,  height:1, backgroundColor:'white'}}>
          </View>
          <ToDoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>

        <View
          style={style.bottomInput}
          >
          <TextInput 
          placeholder='Write your to do...'
          multiline={false}
          value={input}
          onChangeText={setInput}
          style={style.txtIpt}
          blurOnSubmit={true}
          onSubmitEditing={addTodo}
          maxLength={200}
          />
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
    marginTop: 50,
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

  bottomInput:{
  display:'flex',
  position:'absolute',
  bottom:20,
  right:20,
  alignItems:'center',
  backgroundColor:'none',
  minWidth:'90%',
  borderRadius:20,
  marginTop:50,
    },

     txtIpt:{
      outline:'none',
      borderWidth:0, borderRadius:10,
      padding:15, backgroundColor:'skyblue',
      width:'90%',
      fontSize:15,
     },

     bttn:{
      backgroundColor:'white',
      padding:10, margin:5, 
      paddingRight:20,
      paddingLeft:20,
      fontSize:15,
      marginTop: 20,
      },

  topAlign:{
    width:'100%',
    display:'flex',
    flexDirection:'row',
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent:'space-between',
    alignItems:'center'
  }

})