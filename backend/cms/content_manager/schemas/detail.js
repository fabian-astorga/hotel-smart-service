export default {
    name: 'detail',
    title: 'Room Details',
    type: 'object',
    fields: [
      {
        name: 'overview',
        title: 'Overview',
        type: 'string'
      },
      {
        name: 'poster',
        title: 'Detail Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ],
    preview: {
      select: {
        overview: 'serviceName',
        poster: 'poster'
      }
    }
  }
  