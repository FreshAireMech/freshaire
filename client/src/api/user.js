// make sure to encrypt this in future to prevent man in the middle attacks
import { baseFetchOptions, checkStatus } from './utils';

export const requestChangeInfo = (userInfo) => {
  return fetch('/users/changeInfo', {
    ...baseFetchOptions,
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(userInfo)
  })
  .then(res => res.json())
  .then(checkStatus);
}

export const requestSendEmail = (formInfo) => {
  return fetch('/users/formInfo', {
    ...baseFetchOptions,
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(formInfo)
  })
  .then(res => res.json())
  .then(checkStatus);
}