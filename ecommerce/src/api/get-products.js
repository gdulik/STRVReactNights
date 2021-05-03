import config from './../config'
import { getToken } from './get-token'
import { formatProduct } from './utils'

export const getProducts = async () => {
  const token = await getToken()
  const res = await fetch(`${config.apiUrl}/api/skus?include=prices`, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${token}`,
    },
  })
  const { data, included } = await res.json()

  return data.map((product) => formatProduct(product, included))
}
