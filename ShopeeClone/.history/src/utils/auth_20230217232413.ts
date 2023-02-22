export const saveAccessTokenToLS = (newAccessToken: string) => {
  localStorage.setItem('access_token', newAccessToken)
}
export const getAccessTokenToLS = () => {
  localStorage.getItem('access_token')
}
export const deleteAccessTokenToLS = () => {
  localStorage.removeItem('access_token')
}
