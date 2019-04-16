import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class SidebarItem extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>{ this.props.name }</Text>
      </View>
    );
  }
}
