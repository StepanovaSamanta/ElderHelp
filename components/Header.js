import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
        <Text style={styles.text}>Hello</Text>
        /*<div class="navbar">
            <button class="dropbtn" onclick="myFunction()">Dropdown
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" id="myDropdown">
              <a href="#">Главная</a>
              <a href="#">Личный кабинет</a>
              <a href="#">Опросы</a>
              <a href="#">Категории</a>
            </div>
        </div>*/
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 50,
    height: 100,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center'
  }

});
