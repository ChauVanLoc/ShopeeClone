export const saveAccessTokenToLS = (newAccessToken: string) => {
  return localStorage.setItem('access_token', newAccessToken)
}
export const getAccessTokenToLS = () => {
  return localStorage.getItem('access_token') || ''
}
export const deleteAccessTokenToLS = () => {
  return localStorage.removeItem('access_token')
}
