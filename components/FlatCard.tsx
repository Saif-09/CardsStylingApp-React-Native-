/* eslint-disable prettier/prettier */
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, SafeAreaView, Text, StyleSheet, useColorScheme} from 'react-native';

function FlatCard(): JSX.Element{
    return (
        <SafeAreaView>
            <View>
                <Text>My first App</Text>
            </View>
        </SafeAreaView>
    );

}

export default FlatCard;