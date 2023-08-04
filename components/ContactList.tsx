import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Mohd Saif',
      status: 'I love to Code ',
      imageUrl: 'https://avatars.githubusercontent.com/u/69134661?v=4',
    },
    {
      uid: 2,
      name: 'Hitesh Chaoudhary',
      status: 'An instructor for most of the development platforms ',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 3,
      name: 'Code With Harry',
      status: 'Learn To Code Online',
      imageUrl: 'https://avatars.githubusercontent.com/u/48705673?v=4',
    },
    {
      uid: 4,
      name: 'Shradhha Khapra',
      status: 'Love to Teach and Code ',
      imageUrl: 'https://avatars.githubusercontent.com/u/34954810?v=4',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>CONTACT LIST</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text numberOfLines={1} style={styles.userStatus}>
                {status}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
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
    paddingHorizontal: 8,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 4,
    backgroundColor: '#7C9D96',
    borderRadius: 9,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#374259',
    padding: 4,
    borderRadius: 8,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FFF',
  },
  userStatus: {
    fontSize: 12,
    color: '#fff',
  },
});
