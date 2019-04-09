import React, { useContext, useState } from "react";
import { View, TextInput, Text, FlatList } from 'react-native';
import Store from "../context";
import styles from './style'



export default function TodoList() {
  const { state, dispatch } = useContext(Store);
  const [todo, setTodo] = useState("");
  const todoList = state.todos.filter(todo => !todo.completed)
  const completedList = state.todos.filter(todo => todo.completed)

  const Todo = (props) => (
    <Text style={styles.todo} onPress={() => toggleTodo(props.item)}>
      {props.item.title}
    </Text>
  )

  function toggleTodo(todo) {
    dispatch({ type: "TOGGLE", payload: todo });
  }

  return (
    <View>
      <View>
        <View>
          <Text style={styles.header}>My Todo's</Text>
        </View>
        <View>
          <FlatList
            data={todoList}
            renderItem={({ item }) => <Todo item={item} />}
          />
        </View>
        <View>
          <Text>Complete ({completedList.length})</Text>
          <FlatList
            data={completedList}
            renderItem={({ item }) => <Todo item={item} />}
          />
        </View>
      </View>
    </View>
  );
}