import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SidebarItem from './android/components/menu/sidebar/sidebar-item.component'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sup dude, what's going on</Text>
        <SidebarItem name='Thiago'/>
        <SidebarItem name='Luiz'/>
        <SidebarItem name='Nunes'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
