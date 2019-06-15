export default {
    name: 'zoneinfo',
    title: 'Zone Information',
    type: 'object',
    fields: [
      {
        name: 'name',
        title: 'Zone Activity',
        type: 'string'
      },
      {
        name: 'overview',
        title: 'Overview',
        type: 'string'
      },
      {
        name: 'poster',
        title: 'Zone Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ],
    preview: {
      select: {
        name: 'name',
        overview: 'overview',
        poster: 'poster'
      }
    }
  }