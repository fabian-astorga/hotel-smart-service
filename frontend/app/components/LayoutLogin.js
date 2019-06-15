import React from 'react'
import {Text, View, StyleSheet, StatusBar, TouchableHighlight, Alert} from 'react-native'
import {withNavigation} from 'react-navigation'

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    backgroundColor: '#1A1C24',
    height: 50
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10
  },

  text: {
    fontSize: 18,
    color: '#fff'
  },

  touchable: {
    flexBasis: 1,
    flexGrow: 1
  }
})

export default withNavigation(
  class LayoutLogin extends React.Component {

    navigate = {
      toHotelsLogin: () => this.props.navigation.navigate('HotelsLogin'),
      toProfile: () => this.props.navigation.navigate('Profile'),
    }

    _logout = () => {
      Alert.alert(
        'Log Out',
        'Do you really want to log out?',
        [
          {text: 'NO', onPress: () => console.log('NO Pressed')},
          {text: 'YES', onPress: () => this.props.navigation.navigate('Home')}
        ]
      );
    }

    render() {
      const {children} = this.props
      return (
        <View>
          <View style={styles.navigation}>
            <TouchableHighlight style={styles.touchable} onPress={this.navigate.toHotelsLogin}>
              <View style={styles.navItem}>
                <Text style={styles.text}>Hotels</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.touchable} onPress={this.navigate.toProfile}>
              <View style={styles.navItem}>
                <Text style={styles.text}>Profile</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.touchable} onPress={this._logout}>
              <View style={styles.navItem}>
                <Text style={styles.text}>Logout</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>{children}</View>
        </View>
      )
    }
  }
)