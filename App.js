import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/Header';

export default function App() {

  return (
    <View>
      <Header />
      <View  style={styles.container}>
          <Text style={styles.text}>Имя пользователя</Text>
          <Text>Возраст</Text>
          <Text>Почта</Text>
          <Text>Телефон</Text>
          <Text>Пароль</Text>
      </View>
      <Button color="#274696" title={'Авторизоваться'}/>

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
  text: {
    color: 'red',
  }
});
