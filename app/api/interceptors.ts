import axios from 'axios'

import { API_URL } from '../config/api.config'

export const AxiosClassic = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-type': 'application/json',
	},
})
