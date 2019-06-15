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

import backgroundImg from '../images/contact.jpg'
import logo from '../images/logo_hss.png'
import title from '../images/title.png'

export default class Contact extends React.Component {
  static navigationOptions = {
    title: 'Contact'
  };

  constructor(props) {
    super(props);
    this.state = {
      description: 'We are an entrepeneur company that makes publicity about the best hotels around our location. Hope you guys like it.',
      telephone: 'You can contact us through the following telephone number: 88443277',
      email: 'hotelsmartservice@gmail.com',
      fax: 'Also our fax: 22-22-22-22',
      location: 'HSS is located in Cartago, Costa Rica.',
      social: 'You can find us in social media right below ;)',
      instagram: 'https://www.instagram.com/hotelestodoincluido/?hl=es-la',
      twitter: 'https://twitter.com/RiuHoteles',
      facebook: 'https://www.facebook.com/ITCRHoteles/'
    };
  }

  _onFacebookPress = () => {
    Linking.openURL(this.state.facebook);
  };

  _onTwitterPress = () => {
    Linking.openURL(this.state.twitter);
  };

  _onInstagramPress = () => {
    Linking.openURL(this.state.instagram);
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
            <Text style={styles.GridText}>
                  {this.state.description}
            </Text>         
            <Text style={styles.GridText}>
                  {this.state.telephone}
            </Text>        
            <Text style={styles.GridText}>
                  {this.state.email}
            </Text>          
            <Text style={styles.GridText}>
                  {this.state.fax}
            </Text>          
            <Text style={styles.GridText}>
                  {this.state.location}
            </Text>          
            <Text style={styles.GridText}>
                  {this.state.social}
            </Text>
          </View>

          <View style={styles.MainContainer}>
            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={this._onFacebookPress}>
              <Image
                source={{
                  uri:
                    'https://aboutreact.com/wp-content/uploads/2018/08/facebook.png.png',
                }}
                style={styles.ImageIconStyle}
              />
              <View style={styles.SeparatorLine} />
              <Text style={styles.TextStyle}> Facebook </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TwitterStyle} activeOpacity={0.5} onPress={this._onTwitterPress}>
              <Image
                source={{
                  uri:
                    'https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg',
                }}
                style={styles.ImageIconStyle}
              />
              <View style={styles.SeparatorLine} />
              <Text style={styles.TextStyle}> Twitter </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.InstagramStyle} activeOpacity={0.5} onPress={this._onInstagramPress}>
              <Image
                source={{
                  uri:
                    'https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_instagram-512.png',
                }}
                style={styles.ImageIconStyle}
              />
              <View style={styles.SeparatorLine} />
              <Text style={styles.TextStyle}> Instagram </Text>
            </TouchableOpacity>
          </View>
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
    marginTop: 15,
    flexDirection: 'row'
  },
  logo: {
    height: 130,
    width: 130,
  },
  titlelogin : {
    height: 200,
    width: 200
  },
  inputContainer: {
    marginTop: 5,
    backgroundColor: 'rgba(110,110,134,0.7)',
    borderColor: "#fff",
  },
  GridText: {
    color: '#fff',
    padding: 10,
    fontSize: 16,
    textAlign: 'justify'
  },

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 140,
    borderRadius: 5,
    margin: 5,
  },
  TwitterStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3299FF',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 140,
    borderRadius: 5,
    margin: 5,
  },
  InstagramStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 140,
    borderRadius: 5,
    margin: 5,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 20,
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
    
});