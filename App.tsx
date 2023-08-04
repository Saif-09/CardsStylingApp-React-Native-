/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FlatCard from './components/FlatCard';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCards />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
