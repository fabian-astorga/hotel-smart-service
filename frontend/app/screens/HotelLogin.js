import React from 'react'
import Layout from '../components/LayoutLogin'
import sanity from '../lib/sanity'
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import {List, ListItem} from '../components/List'
import Heading from '../components/Heading'

const query = `*[_type == "hotel" && _id == $id] {
  _id,
  name,
  overview,
  ubication,
  price,
  ranking,
  score,
  "posterUrl": poster.asset->url,
  "services": services[] {
    _key,
    serviceName,
    "imageUrl": poster.asset->url,
  },
  "details": details[] {
    _key,
    overview,
    "imageUrl": poster.asset->url,
  },
  "zoneinfos": zoneinfos[] {
    _key,
    name,
    overview,
    "imageUrl": poster.asset->url,
  },
  "activities": activities[] {
    _key,
    name,
    overview,
    "imageUrl": poster.asset->url,
  }
}[0]
`

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 8,
    marginTop: 1300
  },
  content: {
    padding: 5,
    width: 400,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const getServicesKey = services => services._key
const getDetailsKey = details => details._key
const getZoneinfosKey = zoneinfos => zoneinfos._key
const getActivitiesKey = activities => activities._key

export default class Hotel extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    title: navigation.state.params.name
  })

  state = {
    hotels: [],
    isLoading: true
  }

  async componentDidMount() {
    const {navigation} = this.props
    this.setState({
      hotel: await sanity.fetch(query, {id: navigation.state.params.id}),
      isLoading: false
    })
  }

  renderServices = ({item: service}) => {
    const {navigate} = this.props.navigation
    return (
      <ListItem
        imageUrl={service.imageUrl}
        heading={`${service.serviceName}`}
      />
    )
  }

  renderDetails = ({item: detail}) => {
    const {navigate} = this.props.navigation
    return (
      <ListItem
        imageUrl={detail.imageUrl}
        heading={`${detail.overview}`}
      />
    )
  }

  renderZoneinfos = ({item: zoneinfo}) => {
    const {navigate} = this.props.navigation
    return (
      <ListItem
        imageUrl={zoneinfo.imageUrl}
        heading={`${zoneinfo.name}: ${zoneinfo.overview}`}
      />
    )
  }

  renderActivities = ({item: activity}) => {
    const {navigate} = this.props.navigation
    return (
      <ListItem
        imageUrl={activity.imageUrl}
        heading={`${activity.name}: ${activity.overview}`}
      />
    )
  }

  render() {
    const {hotel, isLoading} = this.state
    if (isLoading) {
      return (
        <Layout>
          <Text>Loading…</Text>
        </Layout>
      )
    }

    return (
      <Layout>
        <ScrollView 
              style={styles.content} 
              scrollEnabled={true}>
          <View style={styles.header}>
            <Heading>
              {hotel.name}: {hotel.ubication}
            </Heading>

            {hotel.posterUrl && (
              <Image source={{uri: `${hotel.posterUrl}?w=272`}} style={{width: 270, height: 215}} />
            )}

            <Heading level={2}>About</Heading>
            <Heading level={3}> Overview: {hotel.overview} </Heading>
            <Heading level={3}> Location: {hotel.ubication} </Heading>
            <Heading level={3}> Price: {hotel.price} </Heading>
            <Heading level={3}> Ranking: {hotel.ranking} </Heading>
            <Heading level={3}> Score: {hotel.score} stars </Heading>

            <Heading level={2}>Services</Heading>
            <List keyExtractor={getServicesKey} data={hotel.services} renderItem={this.renderServices} />

            <Heading level={2}>Room Details</Heading>
            <List keyExtractor={getDetailsKey} data={hotel.details} renderItem={this.renderDetails} />

            <Heading level={2}>Zone Information</Heading>
            <List keyExtractor={getZoneinfosKey} data={hotel.zoneinfos} renderItem={this.renderZoneinfos} />

            <Heading level={2}>Activities</Heading>
            <List keyExtractor={getActivitiesKey} data={hotel.activities} renderItem={this.renderActivities} />
          </View>
        </ScrollView>
      </Layout>
    )
  }
}
