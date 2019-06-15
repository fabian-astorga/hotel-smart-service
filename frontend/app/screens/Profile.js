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
  Linking, 
  ScrollView
} from 'react-native';
import { Constants } from 'expo';
import { api } from '../config';

import backgroundImg from '../images/profile.jpg'
import logo from '../images/person.png'

export default class Contact extends React.Component {

  static navigationOptions = ({navigation, screenProps}) => ({
    title: 'Profile',
  })

  constructor(props) {
    super(props);
    this.state = {
      info: 'Personal information',
      name: props.navigation.state.params.name + " " + props.navigation.state.params.lastname,
      username: props.navigation.state.params.username,
      telephone: props.navigation.state.params.telephone,
      email: props.navigation.state.params.email
      
    };
  }

  _executeQuery = async () => {

      fetch(api.URL+'/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "owner": this.state.username,
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
    
    this.props.navigation.navigate('Reservations', {
        reservations: response.response
    });
       
  };


  _seeReservations = () => {
    this._executeQuery();
  };

  _newReservation = () => {
    this.props.navigation.navigate('NewReservation', {owner: this.props.navigation.state.params.username});
  };

  _moreHotels = () => {
    this.props.navigation.navigate('HotelsLogin', {name: this.props.navigation.state.params.name});
  };

  render() {
    return (      
      <ImageBackground source={backgroundImg} style={styles.rootcontainer}>
        <ScrollView 
              style={styles.content} 
              scrollEnabled={true}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.inputContainer}> 
            <Text style={styles.GridText}>
                  Name: {this.state.name}
            </Text>         
            <Text style={styles.GridText}>
                  Username: {this.state.username}
            </Text>        
            <Text style={styles.GridText}>
                  Email: {this.state.email}
            </Text>          
            <Text style={styles.GridText}>
                  Tel: {this.state.telephone}
            </Text> 
          </View>

          <TouchableOpacity style={styles.botonLogin} onPress={this._seeReservations}>
            <Text style={styles.text}>Your Reservations</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botonLogin} onPress={this._newReservation}>
            <Text style={styles.text}>Make New Reservation</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botonLogin} onPress={this._moreHotels}>
            <Text style={styles.text}>See More Hotels</Text>
          </TouchableOpacity>
         
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
    marginTop: 10,
    flexDirection: 'row'
  },
  logo: {
    height: 140,
    width: 140,
  },
  inputContainer: {
    marginTop: 5,
    width: 340,
    backgroundColor: 'rgba(110,110,134,0.8)',
    borderColor: "#000000",
  },
  GridText: {
    color: '#fff',
    padding: 10,
    fontSize: 20,
    textAlign: 'justify'
  },
  botonLogin: {
    width: 300,
    height: 70,
    borderRadius: 25,
    backgroundColor: "#1A1C24",
    justifyContent: 'center',
    marginTop: 5,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.8)',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }    
});