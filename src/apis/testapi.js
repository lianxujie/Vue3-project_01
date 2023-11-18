import httpintance from '@/utils/http'

export function getCategory () {
  return httpintance({
    url: 'home/category/head'
  })
}