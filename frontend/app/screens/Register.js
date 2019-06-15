import * as React from 'react';
import { 
  Text,
  View,
  StyleSheet,
  TextInput, 
  Button, 
  ImageBackground, 
  Image, 
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Constants } from 'expo';
import { api } from '../config';

import backgroundImg from '../images/register.jpg'
import logo from '../images/logo_hss.png'
import title from '../images/title.png'

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Register'
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      telephone: '',
      email: '',
      username: '',
      password: '',
      warningMessage: ''
    };
  }

  _onNameChanged = event => {
    this.setState({
      name: event.nativeEvent.text
    });
  };

  _onLastnameChanged = event => {
    this.setState({
      lastname: event.nativeEvent.text
    });
  };

  _onTelephoneChanged = event => {
    this.setState({
      telephone: event.nativeEvent.text
    });
  };

  _onEmailChanged = event => {
    this.setState({
      email: event.nativeEvent.text
    });
  };

  _onUsernameChanged = event => {
    this.setState({
      username: event.nativeEvent.text
    });
  };

  _onPasswordChanged = event => {
    this.setState({
      password: event.nativeEvent.text
    });
  };


  _executeQuery = async () => {

      fetch(api.URL+'/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "name":this.state.name,
          "lastname":this.state.lastname,
          "telephone":this.state.telephone,
          "email":this.state.email,
          "username": this.state.username,
          "password": this.state.password
        }),
      }).then((response) => response.json())
          .then((responseJson) => {
            this._handleResponse(responseJson);
          })
          .catch((error) => {
            alert(`Ocurrio un error ${error}`);            
          });
  }

  _handleResponse = (response) => {
    if (response.status === 200){    
      alert("You're now registered!");  
      this.props.navigation.navigate('Profile', {
            name: this.state.name,
            lastname: this.state.lastname,
            telephone: this.state.telephone,
            email: this.state.email,
            username: this.state.username
      });
      this.setState({
        warningMessage: '',
      });
      
    } 
    else {
      this.setState({
        warningMessage: `No se pudo registrar...` 
      });
    }
  };

  _onRegisterPress = () => {
    this._executeQuery();
  };

  render() {
    return (      
      <ImageBackground source={backgroundImg} style={styles.rootcontainer}>
        <ScrollView 
                style={styles.content} 
                scrollEnabled={true}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
            <Image source={title} style={styles.titlelogin} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={this.state.name}
              onChange={this._onNameChanged}
              placeholder={'Name'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underlineColorAndroid='transparent'/>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={this.state.lastname}
              onChange={this._onLastnameChanged}
              placeholder={'Lastname'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underlineColorAndroid='transparent'/>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={this.state.telephone}
              onChange={this._onTelephoneChanged}
              placeholder={'Telephone'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underlineColorAndroid='transparent'/>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={this.state.email}
              onChange={this._onEmailChanged}
              placeholder={'Email'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underlineColorAndroid='transparent'/>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={this.state.username}
              onChange={this._onUsernameChanged}
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
          <TouchableOpacity style={styles.botonLogin} onPress={this._onRegisterPress}>
            <Text style={styles.text}>Register Now!</Text>
          </TouchableOpacity>
          <Text style={styles.description}>{this.state.warningMessage}</Text>
        </ScrollView>
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
    marginTop: 50,
    flexDirection: 'row'
  },
  logo: {
    height: 90,
    width: 90,
  },
  titlelogin : {
    height: 110,
    width: 110
  },
  input: {
    width: 250,
    height: 50,
    borderRadius: 25,
    fontSize: 18,
    paddingLeft: 45,
    marginHorizontal: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'white'
  },
  inputContainer: {
    marginTop: 5
  },
  botonLogin: {
    width: 260,
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
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  description: {
    marginTop: 40,
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
  }
});