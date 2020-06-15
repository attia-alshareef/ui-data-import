import {
  map,
  identity,
} from 'lodash';

/**
 * Description: TBD
 *
 * @param {array} params
 * @param {boolean} encode
 * @return {string} [encode]
 */
const generateQueryParams = (params, encode) => {
  const encodeCallback = encode ? encodeURIComponent : identity;
  const queryParamsString = map(params, (value, key) => [key, value].map(encodeCallback).join('=')).join('&');

  return `${(queryParamsString.length ? '?' : '')}${queryParamsString}`;
};

/**
 * Creates url with query parameters
 *
 * @param {string} url
 * @param {object} [queryParams]
 * @param {boolean} [encode] - disables encoding (required when using with manifest)
 */
export const createUrl = (url, queryParams = {}, encode = true) => {
  const paramsString = generateQueryParams(queryParams, encode);

  return `${url.endsWith('?') ? url.slice(0, -1) : url}${paramsString}`;
};
