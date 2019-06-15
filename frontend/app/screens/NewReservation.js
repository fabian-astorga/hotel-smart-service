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
  ScrollView, 
  Picker
} from 'react-native';
import { Constants } from 'expo';
import { api } from '../config';

import backgroundImg from '../images/profile.jpg'
import logo from '../images/logo_hss.png'
import title from '../images/title.png'

export default class NewReservation extends React.Component {
  static navigationOptions = (navigation, screenProps) => ({
    title: 'Create New Reservation'
  });

  constructor(props) {
    super(props);
    this.state = {
      owner: this.props.navigation.state.params.owner,
      start_date: '',
      final_date: '',
      hotel: '',
      amount: '',
      status: 'Pendiente',
      amount_people: ''
    };
  }

  _onStartDateChanged = event => {
    this.setState({
      start_date: event.nativeEvent.text
    });
  };

  _onFinalDateChanged = event => {
    this.setState({
      final_date: event.nativeEvent.text
    });
  };

  _onHotelChanged = event => {
    this.setState({
      hotel: event.nativeEvent.text
    });
  };

  _onAmountPeopleChanged = event => {
    this.setState({
      amount_people: event.nativeEvent.text
    });
  };

  _generateRandomNum = () => {
    const min = 100;
    const max = 1000;
    let rand =  min + (Math.random() * (max-min));
    return rand
  }


  _executeQuery = async () => {

      fetch(api.URL+'/reservation/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "owner":this.state.owner,
          "start_date":this.state.start_date,
          "final_date":this.state.final_date,
          "hotel":this.state.hotel,
          "amount": this.state.amount + this._generateRandomNum().toString(),
          "status": this.state.status,
          "amount_people": this.state.amount_people
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
      alert("Your reservation has been registered!");  
      this.props.navigation.navigate('Profile', { }); 
    } 
    else {
      this.setState({
        warningMessage: `Something's wrong...` 
      });
    }
  };

  _onNewReservationPress = () => {
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
              value={this.state.start_date}
              onChange={this._onStartDateChanged}
              placeholder={'Start Date'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underlineColorAndroid='transparent'/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={this.state.final_date}
              onChange={this._onFinalDateChanged}
              placeholder={'Last Date'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underlineColorAndroid='transparent'/>
          </View>
          <View style={styles.inputContainer}>
            <Picker
              selectedValue={this.state.hotel}
              style={styles.dropdown}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({hotel: itemValue})
              }>
              <Picker.Item label="La Riviera" value="La Riviera" />
              <Picker.Item label="El Castillo" value="El Castillo" />
              <Picker.Item label="Forest Lodge" value="Forest Lodge" />
              <Picker.Item label="Orlando Lodge" value="Orlando Lodge" />
              <Picker.Item label="Los Cocos" value="Los Cocos" />
              <Picker.Item label="San Francisco" value="San Francisco" />
              <Picker.Item label="Sarapiqui" value="Sarapiqui" />
              <Picker.Item label="Quantum" value="Quantum" />
              <Picker.Item label="Los Sueños de Marriot" value="Los Sueños de Marriot" />
            </Picker>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={this.state.amount_people}
              onChange={this._onAmountPeopleChanged}
              placeholder={'Amount People'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underlineColorAndroid='transparent'/>
          </View>
          <TouchableOpacity style={styles.botonLogin} onPress={this._onNewReservationPress}>
            <Text style={styles.text}>Make your Reservation</Text>
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
    backgroundColor: "#303057",
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
  dropdown: {
    width: 250,
    height: 50,
    borderRadius: 25,
    fontSize: 18,
    paddingLeft: 45,
    marginHorizontal: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'white'
  }
});