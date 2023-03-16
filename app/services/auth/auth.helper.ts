import Cookie from 'js-cookie'

import { IAuthResponse, ITokens } from '../../store/user/user.interface'

export const saveTokensStorage = (data: ITokens) => {
	Cookie.set('accessToken', data.accessToken)
	Cookie.set('refreshToken', data.refreshToken)
}

export const removeTokensStorage = () => {
	Cookie.remove('accessToken')
	Cookie.remove('refreshToken')
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}
