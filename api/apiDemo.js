import request from '../utils/request'

/**
*/
export function getError(params) {
  return request.get(`/error`, { params })
}

/**
*/
export function headError(data) {
  return request.head(`/error`, data)
}

/**
*/
export function error(data) {
  return request.post(`/error`, data)
}

/**
*/
export function putError(data) {
  return request.put(`/error`, data)
}

/**
*/
export function deleteError(data) {
  return request.delete(`/error`, data)
}

/**
*/
export function optionsError(data) {
  return request.options(`/error`, data)
}
