import React from 'react';

import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

function FlatCard(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>FLAT CARDS</Text>
      </View>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Purple</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 9,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#8dc576',
  },
  cardTwo: {
    backgroundColor: '#ad76c5',
  },
  cardThree: {
    backgroundColor: '#76b5c5',
  },
});

export default FlatCard;
