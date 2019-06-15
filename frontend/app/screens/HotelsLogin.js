import React from 'react'
import Layout from '../components/LayoutLogin'
import sanity from '../lib/sanity'
import {List, ListItem} from '../components/List'

const query = `*[_type == "hotel"] {
  _id,
  name,
  ubication,
  overview,
  ranking,
  score,
  price,
  "posterUrl": poster.asset->url
}[0...50]
`

const getId = value => value._id

export default class Hotels extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    title: 'Welcome to HSS, ' + navigation.state.params.name
  })

  state = {
    hotels: []
  }

  async componentDidMount() {
    this.setState({hotels: await sanity.fetch(query)})
  }

  renderHotel = ({item: hotel}) => {
    const {navigate} = this.props.navigation

    return (
      <ListItem
        imageUrl={hotel.posterUrl}
        heading={`${hotel.name} (${hotel.ubication})`}
        subText={`Ranking: ${hotel.ranking}`}
        onPress={() =>
          navigate('HotelLogin', {
            id: hotel._id,
            name: hotel.name,
            overview: hotel.overview,
            ubication:hotel.ubication,
            ranking:hotel.ranking,
            price:hotel.price,
            score:hotel.score,
          })
        }
      />
    )
  }

  render() {
    const {hotels} = this.state
    return (
      <Layout>
        <List data={hotels} renderItem={this.renderHotel} />
      </Layout>
    )
  }
}