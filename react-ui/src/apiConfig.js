let apiUrl
const railsPort = 5000
const apiUrls = {
  production: 'https://aqueous-atoll-85096.herokuapp.com',
  development: `http://localhost:${railsPort}`
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
