import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ReadStoryScreen extends React.Component {
  render() {
      return(
        <View>
          <Image source={require("../assets/read.png")} style={{width: 200, height: 200}}/>

          <Text>Read Story</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
});
