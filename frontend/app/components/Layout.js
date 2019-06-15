import React from 'react'
import {Text, View, StyleSheet, StatusBar, TouchableHighlight} from 'react-native'
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
  class Layout extends React.Component {
    navigate = {
      tohotels: () => this.props.navigation.navigate('Hotels'),
      toContact: () => this.props.navigation.navigate('Contact'),
      toLogin: () => this.props.navigation.navigate('Login'),
    }

    render() {
      const {children} = this.props
      return (
        <View>
          <View style={styles.navigation}>
            <TouchableHighlight style={styles.touchable} onPress={this.navigate.tohotels}>
              <View style={styles.navItem}>
                <Text style={styles.text}>Hotels</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.touchable} onPress={this.navigate.toContact}>
              <View style={styles.navItem}>
                <Text style={styles.text}>Contact</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.touchable} onPress={this.navigate.toLogin}>
              <View style={styles.navItem}>
                <Text style={styles.text}>Login</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>{children}</View>
        </View>
      )
    }
  }
)