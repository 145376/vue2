import Mock from 'mockjs'
export let api_home = Mock.mock('/home', 'get', {
  'list|1-10': [{
    'id|+1': 1
  }]
})

