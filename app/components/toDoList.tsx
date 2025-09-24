import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

 interface Todo{
        todos: [],
        deleteTodo: () => void,
        toggleTodo: () => void,
    }


const ToDoList = ({todos, deleteTodo, toggleTodo}:Todo) => {
   

    return(
        <FlatList 
        data={todos}
        keyExtractor={(item) => item?.id}
        renderItem ={({item}) => (
            <TouchableOpacity 
            onPress={() => toggleTodo(item?.id)}    
            onLongPress = {() => deleteTodo(item.id)}
    
            >
                <Text style={[style.text, item.done && style.strikeDone]}>
                    {item.text}
                </Text>
            </TouchableOpacity>
        ) }
        contentContainerStyle={{ paddingBottom: 100 }} 
        style={{ flex: 1 }}
        />

       

    )
}

export default ToDoList;

const style = StyleSheet.create({
    todoList: {
        color: 'white', 
    },
    text: {
        color:'white', 
        backgroundColor:'#4b044b',
        padding: 10,
        margin: 2,
        fontSize: 20,
    },
    strikeDone: {
        textDecorationLine: 'line-through',
        color:'gray'
    }
})