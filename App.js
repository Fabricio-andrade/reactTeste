import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Image style={styles.logo} source={require('./assets/logo.png')}/>
      </View>
      <View>
      <Button title='Iniciar' color="#FF8933" accessibilityLabel='Botão laranja - Iniciar'/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC49A',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  logo: {
    width: 200,
    height: 150,
  }
  
});
