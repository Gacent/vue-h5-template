import http from './request'

const getInfo = () => {
  return http({
    url: '/topics',
    methods: 'GET'
  })
}

const getInfoDetail = (id) => {
  return http({
    url: `/topics/${id}`,
    methods: 'GET'
  })
}

export default {
  getInfo,
  getInfoDetail
}
