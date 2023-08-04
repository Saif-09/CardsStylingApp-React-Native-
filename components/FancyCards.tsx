import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>FANCY CARDS</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1688027882449-5514fc5b1e00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>
              The golden gate bridge is lit up at night
            </Text>
            <Text style={styles.cardLabel}> San Fransisco,</Text>
            <Text style={styles.cardDescription}>
              The wonderful Golden Gate Bridge in the Blue Hour. The Golden Gate
              is a world-renowned iconic bridge located in San Francisco,
              California, USA. It is not only an engineering marvel but also a
              symbol of the city and an iconic landmark recognized globally.
            </Text>
            <Text style={styles.cardFooter}>12 mins ago.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 9,
    textAlign: 'center',
  },
  card: {
    width: 320,
    height: 398,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 'auto',
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 30,
    shadowOffset: {
      width: 1,
      height: 7,
    },
    shadowColor: '#000',
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  cardImage: {
    height: 180,
    marginBottom: 9,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 13,
    marginBottom: 12,
  },
  cardFooter: {
    color: '#000000',
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
});
