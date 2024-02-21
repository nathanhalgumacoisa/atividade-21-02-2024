import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
export default function App() {
  const [task,setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
	  if (task.trim().length > 0) {
	    setList([...list, { id: Math.random().toString(), value: task }]);
	    setList("");
	  }
	};
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
        placeholder="Digite uma nova tarefa"
        style={styles.input}
        onChangeText={setTask}
        value={task}
        />
        <TouchableOpacity
        style={styles.addButton}
        onPress={addTask}
        >
        <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView  showsVerticalScrollIndicator={false}>
  {list.map((task) => (
    <View
      key={task.id}
      
    >
      <Text >{task.value}</Text>
      <TouchableOpacity
        onPress={() => removeTask(task.id)}
        
      >
        <Text>Remover</Text>
      </TouchableOpacity>
    </View>
  ))}
</ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  form: {
    display: "flex",
    flexdirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:"20",

  },

  input: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: "75%",
  },

  addButton: {
    backgroundColor: "pink",

  }
});
