export const saveAccessTokenToLS = (newAccessToken: string) => {
  localStorage.setItem('access_token', newAccessToken)
}
