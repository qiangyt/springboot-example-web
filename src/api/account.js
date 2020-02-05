import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/accounts/signin/byName/' + data.username,
    method: 'post',
    data: data.password
  })
}
