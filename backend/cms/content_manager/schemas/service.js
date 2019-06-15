export default {
    name: 'service',
    title: 'Services',
    type: 'object',
    fields: [
      {
        name: 'serviceName',
        title: 'Service',
        type: 'string'
      },
      {
        name: 'poster',
        title: 'Service Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ],
    preview: {
      select: {
        serviceName: 'serviceName',
        poster: 'poster'
      }
    }
  }
  