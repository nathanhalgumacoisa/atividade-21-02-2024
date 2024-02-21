import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View className={`flex flex-row justify-between items-center mb-6`}>
        <TextInput
        placeholder="Digite uma nova tarefa"
        className={`border-b border-b-black p-2 w-3/4`}
        onChangeText={setTask}
        value={task}
        />
        <TouchableOpacity
        className={`bg-blue-500 p-2 rounded-md`}
        >
        <Text className={`text-white`}>Adicionar</Text>
        </TouchableOpacity>
      </View>
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

  }
});
