export default {
    name: 'activity',
    title: 'Activities',
    type: 'object',
    fields: [
      {
        name: 'name',
        title: 'Activity',
        type: 'string'
      },
      {
        name: 'overview',
        title: 'Overview',
        type: 'string'
      },
      {
        name: 'poster',
        title: 'Activity Image',
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