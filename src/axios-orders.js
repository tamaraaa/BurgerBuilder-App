import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://burgerbuilder-f2b23.firebaseio.com/'
})
export default instance