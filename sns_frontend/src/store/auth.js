/**
 * Created by SeoJung on 2017. 5. 13..
 */

export function getAuthToken() {
  return localStorage.getItem('authToken')
}

export function getUser() {
  return JSON.parse(localStorage.getItem('user'))
}

export function setAuthToken(token, user) {
  localStorage.setItem('authToken', token)
  localStorage.setItem('user', user)
}

export function removeAuthToken() {
  localStorage.removeItem('authToken')
  localStorage.removeItem('user')
}
