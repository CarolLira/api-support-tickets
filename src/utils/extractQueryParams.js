export function extractQueryParams(query) {
  return query
  .slice(1)
  .split("&")
  .reduce((queryParams, param) => {
    console.log(queryParams, param)
    const [key, value] = param.split("=")
    queryParams[key] = value

    return queryParams
  }, {})
}