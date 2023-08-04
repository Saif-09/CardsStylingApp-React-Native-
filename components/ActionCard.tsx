import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>BLOG CARD</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
              What's new in JavaScript 21 - ES-12
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
              ECMAScript 2021 (ES12) introduced new features and improvements to
              JavaScript, enhancing the language's capabilities. Notable
              additions include the 'Logical Assignment Operators' for concise
              variable updates, 'String.prototype.replaceAll()' for global
              string replacement, and the 'Promise.any()' method for handling
              asynchronous tasks. ES12 further enhances JavaScript's versatility
              and developer productivity.
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() => openWebsite('https://www.javascript.com/')}>
              <Text>Read More...</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openWebsite('https://www.linkedin.com/in/mohd-saif-134076141/')
              }>
              <Text style={styles.socialLinks}>Connect on LinkedIn</Text>
            </TouchableOpacity>
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
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  card: {
    width: 320,
    height: 380,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 5,
  },
  elevatedCard: {
    backgroundColor: '#120E43',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 7,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
  },
});
