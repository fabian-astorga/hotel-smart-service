import * as React from 'react';
import { 
  Text,
  View,
  StyleSheet,
  TextInput, 
  Button, 
  ImageBackground, 
  Image, 
  TouchableOpacity
} from 'react-native';
import { Constants } from 'expo';
import { api } from '../config';

import backgroundImg from '../images/login.jpg'
import logo from '../images/logo_hss.png'
import title from '../images/title.png'

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      warningMessage: ''
    };
  }

  _onUserChanged = event => {
    this.setState({
      user: event.nativeEvent.text
    });
  };

  _onPasswordChanged = event => {
    this.setState({
      password: event.nativeEvent.text
    });
  };

  _executeQuery = async () => {

      fetch(api.URL+'/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "username": this.state.user,
          "password": this.state.password
        }),
      }).then((response) => response.json())
          .then((responseJson) => {
            this._handleResponse(responseJson);
          })
          .catch((error) => {
            this.setState({
              warningMessage: `Ocurrio un error ${error}` 
            })
          });
  }

  _handleResponse = (response) => {
    if (response.status === 200){
      if (this.state.user === response.response.username && this.state.password === response.response.password) {
        this.props.navigation.navigate('Profile', {
            name: response.response.name,
            lastname: response.response.lastname,
            telephone: response.response.telephone,
            email: response.response.email,
            username: response.response.username
        });
        this.setState({
          warningMessage: '',
        });
      }
    } else {
      this.setState({
        warningMessage: `El usuario no existe...` 
      });
    }
};

  _onLoginPress = () => {
    this._executeQuery();
  };

  _onRegisterPress = () => {
    this.setState({
      warningMessage: ''
    });
    this.props.navigation.navigate('Register', {});
  };

  render() {
    return (      
      <ImageBackground source={backgroundImg} style={styles.rootcontainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Image source={title} style={styles.titlelogin} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={this.state.user}
            onChange={this._onUserChanged}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={this.state.password}
            onChange={this._onPasswordChanged}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'/>
        </View>
        <TouchableOpacity style={styles.botonLogin} onPress={this._onLoginPress}>
					<Text style={styles.text}>Login</Text>
				</TouchableOpacity>
        <TouchableOpacity style={styles.botonLogin} onPress={this._onRegisterPress}>
					<Text style={styles.text}>Register</Text>
				</TouchableOpacity>
        <Text style={styles.description}>{this.state.warningMessage}</Text>
      </ImageBackground>	  
    );
  }
}

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    alignItems: 'center'
  },
  logoContainer: {
    marginTop: 85,
    flexDirection: 'row'
  },
  logo: {
    height: 140,
    width: 140,
  },
  titlelogin : {
    height: 180,
    width: 180
  },
  input: {
    width: 240,
    height: 40,
    borderRadius: 25,
    fontSize: 18,
    paddingLeft: 45,
    marginHorizontal: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'white'
  },
  inputContainer: {
    marginTop: 10
  },
  botonLogin: {
    width: 240,
    height: 60,
    borderRadius: 25,
    backgroundColor: "#1A1C24",
    justifyContent: 'center',
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.8)',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  description: {
    marginTop: 40,
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  }
});