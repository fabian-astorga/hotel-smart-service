import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'hotel',
  title: 'Hotel',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Hotel Name',
      type: 'string'
    },

    {
      name: 'overview',
      title: 'Overview',
      type: 'string'
    },
    {
      name: 'ubication',
      title: 'Ubication',
      type: 'string'
    },
    {
      name: 'score',
      title: 'Score',
      type: 'number'
    },
    {
      name: 'ranking',
      title: 'Ranking',
      type: 'number'
    },
    {
        name: 'price',
        title: 'Price per Day',
        type: 'string'
      },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'services',
      title: 'Hotel Services',
      type: 'array',
      of: [{type: 'service'}]
    },
    {
      name: 'details',
      title: 'Room Details',
      type: 'array',
      of: [{type: 'detail'}]
    },
    {
      name: 'zoneinfos',
      title: 'Zone Information',
      type: 'array',
      of: [{type: 'zoneinfo'}]
    },
    {
      name: 'activities',
      title: 'Activities',
      type: 'array',
      of: [{type: 'activity'}]
    }
  ],
  
}
