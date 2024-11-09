import React, { useState } from "react";
import { KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform } from "react-native";
import Task from "@/app/Task";
//import {CookiesProvider, useCookies} from "react-cookie";

export default function Index() {
  const [task, setTask] = useState<string>('');
  const [taskItems, setTaskItems] = useState<string[]>([]);
  //const [cookies, setCookie] = useCookies(['task']);

  function handleAddTask() {
    Keyboard.dismiss();
    if (task) {
      setTaskItems([...taskItems, task]);
      setTask('');
      //setCookie('task', [taskItems], { path: '/'});
    }
  };
  const completeTask = (index: number) => {
    const itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View className="flex-1 bg-gray-200">
      {/* Scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Today's Tasks */}
        <View className="pt-20 px-5">
          <Text className="text-3xl font-bold">Today's Tasks</Text>
          <View className="mt-8">
            {taskItems.map((item: string, index: number) => (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="absolute bottom-16 w-full flex-row justify-around items-center"
      >
        <TextInput
          className="text-xl py-4 px-4 bg-white rounded-full border border-gray-300 w-64 text-center"
          placeholderTextColor="gray"
          placeholder="Write a task"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View className=" w-16 h-16 bg-white rounded-full justify-center items-center border border-gray-300">
            <Text className="mb-2 text-4xl text-gray-400">+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}