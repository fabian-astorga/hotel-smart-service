import React from 'react';
import { 
  ImageBackground, 
  FlatList, 
  Text, 
  View, 
  Alert, 
  TouchableOpacity, 
  StyleSheet,
  ScrollView
} from 'react-native';
import backgroundImg from '../images/profile.jpg';

export default class Reservations extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    title: 'Reservations'
  });
  
  constructor(props)
  {
    super(props);

    this.state = {
        GridViewItems: props.navigation.state.params.reservations
    }
  }

  render() {
    return (
      <ImageBackground source={backgroundImg} style={styles.container}>
        <View style={styles.MainContainer}>
          <ScrollView 
            style={styles.content} 
            scrollEnabled={true}>
            <FlatList              
              style={{marginTop:100}}
              data={ this.state.GridViewItems }
              renderItem={({item}) =>
              <View style={styles.GridViewBlock}>
                <Text style={styles.GridText}>
                  Owner: {item.owner}
                </Text>
                <Text style={styles.GridText}>
                  Hotel: {item.hotel}
                </Text>
                <Text style={styles.GridText}>
                  Start Date: {item.start_date}
                </Text>
                <Text style={styles.GridText}>
                  Last Date: {item.final_date}
                </Text>
                <Text style={styles.GridText}>
                  Pay: ${item.amount}
                </Text>
                <Text style={styles.GridText}>
                  Status: {item.status}
                </Text>
                <Text style={styles.GridText}>
                  People: {item.amount_people}
                </Text>
              </View>}
              keyExtractor={(item,index) => index.toString()}
              numColumns={1}
            />
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  MainContainer:{
    justifyContent: 'center',
    flex:1,
    margin: 2,
  },
  GridViewBlock: {
    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    height: 340,
    width: 300,
    margin: 5,
    backgroundColor: '#7E8F92',
    opacity: 0.9,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'rgb(0, 0, 0)'
  },
  GridText: {
    color: '#fff',
    padding: 10,
    fontSize: 16,
    textAlign: 'justify'
  },
  content: {
    padding: 5,
    width: 350,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  }
})