import React, { useContext, useState } from "react";
import { View, Button, TextInput } from 'react-native'
import Store from "../context";


export default function TodoForm() {
    const { dispatch } = useContext(Store);

    // Creating a local state to have currently writing
    // todo item that will be sent to the global store.
    const [todo, setTodo] = useState("");

    function handleTodoChange(val) {
        setTodo({title: val, completed: false});
    }

    function handleTodoAdd() {
        dispatch({ type: "ADD_TODO", payload: todo });
        setTodo("");
    }

    function handleSubmitForm(event) {
        console.log(event)
        // if (event.keyCode === 13) handleTodoAdd();
    }

    return (
        <View>
            <View>

                <View>
                    <TextInput onChangeText={handleTodoChange} value={todo} onKeyPress={handleSubmitForm} />
                    <View>
                        <Button onPress={handleTodoAdd} title="Add" />
                    </View>
                </View>
            </View>
        </View>
    );
}