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
      <Text style  = {styles.headingText}>CONTACT LIST</Text>
      <ScrollView style = {styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl})=> (
            <View key={uid} style = {styles.userCard}>
                <Image
                source={{
                    uri: imageUrl
                }}
                style = {styles.userImage}
                />
                <Text style = {styles.useName}>{name}</Text>
                <Text style = {styles.useStatus}>{status}</Text>

            </View>
        ))}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 9,
    textAlign: 'center',
    },
    container:{

    },
    userCard:{},
    userImage:{
        height: 60,
        width:60,
        borderRadius: 30
    },
    userName:{},
    userStatus:{},
});
