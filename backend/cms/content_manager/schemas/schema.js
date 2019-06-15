import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import hotel from './hotel'
import detail from './detail'
import service from './service'
import zoneinfo from './zoneinfo'
import activity from './activity'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    hotel,
    service,
    detail,
    zoneinfo,
    activity
  ])
})
